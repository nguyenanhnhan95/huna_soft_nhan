package com.example.grocery_store_sales_online.controller;

import com.example.grocery_store_sales_online.enums.ErrorCode;
import com.example.grocery_store_sales_online.exception.ResourceNotFoundException;
import com.example.grocery_store_sales_online.model.User;
import com.example.grocery_store_sales_online.payload.UserResponse;
import com.example.grocery_store_sales_online.security.CurrentUser;
import com.example.grocery_store_sales_online.security.UserPrincipal;
import com.example.grocery_store_sales_online.service.user.UserService;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
public class UserController {
    private final UserService userService;
    @GetMapping("/me")
    public ResponseEntity<UserResponse> getCurrentUser(@CurrentUser UserPrincipal userPrincipal) {
        if(userPrincipal !=null){
            UserResponse userResponse = UserResponse.builder().id(userPrincipal.getId())
                    .name(userPrincipal.getName())
                    .avatar(userPrincipal.getAvatar())
                    .authProvider(userPrincipal.getProvider())
                    .authorities(userPrincipal.getAuthorities()).build();
            return new ResponseEntity<>(userResponse, HttpStatus.OK);
        }else {
            throw new ResourceNotFoundException("User", "id", userPrincipal.getId(), ErrorCode.USER_NOT_FOUND);
        }
    }
}
