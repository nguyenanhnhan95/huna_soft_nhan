package com.example.grocery_store_sales_online.payload;

import com.example.grocery_store_sales_online.enums.AuthProvider;
import com.example.grocery_store_sales_online.model.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@Builder
public class UserResponse {
    private Long id;
    private String name;
    private String avatar;

    private AuthProvider authProvider;
    private Collection<? extends GrantedAuthority> authorities;
}
