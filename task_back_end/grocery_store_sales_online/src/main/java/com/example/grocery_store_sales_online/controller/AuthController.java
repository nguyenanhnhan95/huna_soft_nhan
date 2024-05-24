package com.example.grocery_store_sales_online.controller;

import com.example.grocery_store_sales_online.enums.AuthProvider;
import com.example.grocery_store_sales_online.enums.ErrorCode;
import com.example.grocery_store_sales_online.exception.AppException;
import com.example.grocery_store_sales_online.exception.BadRequestException;
import com.example.grocery_store_sales_online.model.User;
import com.example.grocery_store_sales_online.payload.ApiResponse;
import com.example.grocery_store_sales_online.payload.AuthResponse;
import com.example.grocery_store_sales_online.payload.LoginRequest;
import com.example.grocery_store_sales_online.payload.SignUpRequest;
import com.example.grocery_store_sales_online.security.CustomUserDetailsService;
import com.example.grocery_store_sales_online.security.TokenProvider;
import com.example.grocery_store_sales_online.security.UserPrincipal;
import com.example.grocery_store_sales_online.service.user.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.lang.reflect.InvocationTargetException;
import java.net.URI;

@RestController
@RequestMapping("/auth")
@CrossOrigin("http://localhost:3000")
@RequiredArgsConstructor
public class AuthController {
    private final AuthenticationManager authenticationManager;
    private final UserService userService;
    private final PasswordEncoder passwordEncoder;
    private final TokenProvider tokenProvider;
    private final CustomUserDetailsService customUserDetailsService;
    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) throws Exception {
        Authentication authentication;
        UserPrincipal userPrincipal;
        try {
            userPrincipal = (UserPrincipal) customUserDetailsService.loadUserByUsername(loginRequest.getName());
            authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getName(), loginRequest.getPassword(),userPrincipal.getAuthorities()));
        } catch (DisabledException e) {
            throw new DisabledException("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new BadCredentialsException("Sai tài khoản hoặc mật khẩu");
        }
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token = tokenProvider.createToken(authentication,AuthProvider.local);
        return ResponseEntity.ok(new AuthResponse(token));
    }
    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignUpRequest signUpRequest) {
        if(userService.existsByEmail(signUpRequest.getEmail())) {
            throw new AppException(ErrorCode.USER_EXISTED);
        }

        // Creating user's account
        User user = new User();
        user.setName(signUpRequest.getName());
        user.setEmail(signUpRequest.getEmail());
        user.setPassword(signUpRequest.getPassword());
        user.setProvider(AuthProvider.local);

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        User result = userService.save(user);

        URI location = ServletUriComponentsBuilder
                .fromCurrentContextPath().path("/user/me")
                .buildAndExpand(result.getId()).toUri();

        return ResponseEntity.created(location)
                .body(new ApiResponse(1000, "User registered successfully@"));
    }
    private void authenticate(String username, String password) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }
    }
    @GetMapping("/refresh")
    public void refreshToken(){
        Authentication authentication =SecurityContextHolder.getContext().getAuthentication();

    }
}
