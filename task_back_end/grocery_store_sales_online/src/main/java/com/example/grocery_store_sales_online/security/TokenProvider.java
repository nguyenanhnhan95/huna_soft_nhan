package com.example.grocery_store_sales_online.security;

import com.example.grocery_store_sales_online.config.AppProperties;
import com.example.grocery_store_sales_online.enums.AuthProvider;
import com.example.grocery_store_sales_online.enums.ErrorCode;
import com.example.grocery_store_sales_online.exception.InvalidException;
import com.example.grocery_store_sales_online.model.Employee;
import com.example.grocery_store_sales_online.model.InvalidatedToken;
import com.example.grocery_store_sales_online.model.Person;
import com.example.grocery_store_sales_online.payload.AuthResponse;
import com.example.grocery_store_sales_online.repository.token.InvalidatedTokenRepository;
import com.example.grocery_store_sales_online.service.employee.EmployeeService;
import com.example.grocery_store_sales_online.service.user.UserService;
import io.jsonwebtoken.*;
import io.jsonwebtoken.io.DecodingException;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;
import org.springframework.util.StringUtils;

import java.text.ParseException;
import java.util.Collections;
import java.util.Date;
import java.util.StringJoiner;
import java.util.UUID;


@Service
@RequiredArgsConstructor
public class TokenProvider {
    private static final Logger logger = LoggerFactory.getLogger(TokenProvider.class);
    private final   AppProperties appProperties;

    private final InvalidatedTokenRepository invalidatedTokenRepository;
    private final CustomUserDetailsService customUserDetailsService;
    public String createToken(Authentication authentication, AuthProvider authProvider) {
        UserPrincipal userPrincipal = (UserPrincipal) authentication.getPrincipal();

        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + appProperties.getAuth().getTokenExpirationMsec());
//        Date expiryDate = new Date(now.getTime() + 1);
        return Jwts.builder()
                .setSubject(Long.toString(userPrincipal.getId()))
                .setIssuedAt(new Date())
                .setExpiration(expiryDate)
                .claim("scope",buildScope(userPrincipal))
                .claim("provider",authProvider.toString())
                .claim("idToken",UUID.randomUUID().toString())
                .signWith(SignatureAlgorithm.HS512, appProperties.getAuth().getTokenSecret())
                .compact();
    }
    public void logout(String token) {
        if (StringUtils.hasText(token)) {
           Claims claims = validateToken(token);
           String idToken =(String) claims.get("idToken");
           Date expireDate = claims.getExpiration();
            InvalidatedToken invalidatedToken = InvalidatedToken.builder()
                    .idToken(idToken)
                    .expiryTime(expireDate)
                    .build();
            invalidatedTokenRepository.save(invalidatedToken);
        }
    }
    public AuthResponse refreshToken(AuthResponse request){
        String provider = getUserProviderFromToken(request.getAccessToken());
        Long idUser=getUserIdFromToken(request.getAccessToken());
        UserDetails userDetails=null;
        if(AuthProvider.local.toString().equals(provider)){
            userDetails=customUserDetailsService.loadEmployeeById(idUser);
        }else {
            userDetails=customUserDetailsService.loadUserById(idUser);
        }
        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + appProperties.getAuth().getTokenExpirationMsec());
        return new AuthResponse("");
    }

    public Long getUserIdFromToken(String token) {
        Claims claims = Jwts.parser()
                .setSigningKey(appProperties.getAuth().getTokenSecret())
                .parseClaimsJws(token)
                .getBody();

        return Long.parseLong(claims.getSubject());
    }
    public String getUserProviderFromToken(String token){
        Claims claims =Jwts.parser()
                .setSigningKey(appProperties.getAuth().getTokenSecret())
                .parseClaimsJws(token)
                .getBody();
        return (String) claims.get("provider");
    }
    public Claims validateToken(String authToken)  {
        try {
            Claims claims=Jwts.parser().setSigningKey(appProperties.getAuth().getTokenSecret()).parseClaimsJws(authToken).getBody();
            if(invalidatedTokenRepository.findByIdToken((String) claims.get("idToken")).isPresent()){
                throw new InvalidException(ErrorCode.UNAUTHENTICATED.getLabel());
            }
            return claims;
        } catch (SignatureException ex) {
            logger.error("Invalid JWT signature");
        } catch (MalformedJwtException ex) {
            logger.error("Invalid JWT token");
        } catch (ExpiredJwtException ex) {
            logger.error("Expired JWT token");
        } catch (UnsupportedJwtException ex) {
            logger.error("Unsupported JWT token");
        } catch (IllegalArgumentException ex) {
            logger.error("JWT claims string is empty.");
        } catch (DecodingException e){
            logger.error("Decoding error");
        }
        return null;
    }
    private String buildScope(UserPrincipal userPrincipal){
        StringJoiner stringJoiner = new StringJoiner(" ");
        if(!CollectionUtils.isEmpty(userPrincipal.getAuthorities())){
            userPrincipal.getAuthorities().forEach(s->stringJoiner.add(s.getAuthority()));
        }
        return stringJoiner.toString();
    }
}
