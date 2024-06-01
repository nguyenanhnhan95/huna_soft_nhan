package com.example.grocery_store_sales_online.security;

import com.example.grocery_store_sales_online.enums.AuthProvider;
import com.example.grocery_store_sales_online.model.person.Employee;
import com.example.grocery_store_sales_online.model.account.Role;
import com.example.grocery_store_sales_online.model.person.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.oauth2.core.user.OAuth2User;

import java.util.*;

public class UserPrincipal implements OAuth2User, UserDetails {
    private Long id;
    private String email;
    private String name;
    private  String avatar;
    private String password;
    private AuthProvider provider;
    private Collection<? extends GrantedAuthority> authorities;
    private Map<String, Object> attributes;

    public UserPrincipal(Long id,String name, String email,String avatar,String password, AuthProvider provider, Collection<? extends GrantedAuthority> authorities) {
        this.id = id;
        this.name=name;
        this.email = email;
        this.avatar=avatar;
        this.password=password;
        this.provider = provider;
        this.authorities = authorities;
    }

    public static UserPrincipal createUser(User  user,String role) {
        List<GrantedAuthority> authorities = Collections.
                singletonList(new SimpleGrantedAuthority(role));

        return new UserPrincipal(
                user.getId(),
                user.getName(),
                user.getEmail(),
                user.getImageUrl(),
                user.getPassword(),
                user.getProvider(),
                authorities
        );
    }
    public static UserPrincipal createEmployee(Employee  employee,Set<Role> roles) {
        List<GrantedAuthority> authorities = new ArrayList<>();
//                Collections.singletonList(new SimpleGrantedAuthority(role));
        roles.forEach(role->authorities.add(new SimpleGrantedAuthority(role.getAlias())));
        return new UserPrincipal(
                employee.getId(),
                employee.getName(),
                employee.getEmail(),
                employee.getAvatar(),
                employee.getPassword(),
                employee.getProvider(),
                authorities
        );
    }

    public static UserPrincipal create(User user, Map<String, Object> attributes) {
        UserPrincipal userPrincipal = UserPrincipal.createUser(user, "ROLE_USER");
        userPrincipal.setAttributes(attributes);
        return userPrincipal;
    }

    public Long getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return this.password;
    }

    public AuthProvider getProvider() {
        return provider;
    }

    @Override
    public <A> A getAttribute(String name) {
        return OAuth2User.super.getAttribute(name);
    }

    @Override
    public Map<String, Object> getAttributes() {
        return attributes;
    }

    public void setAttributes(Map<String, Object> attributes) {
        this.attributes = attributes;
    }

    @Override
    public String getName() {
        return this.name;
    }

    public String getAvatar() {
        return avatar;
    }
}
