package com.example.shoptuyet.config;

import com.example.shoptuyet.model.Permission;
import com.example.shoptuyet.model.Role;
import lombok.Getter;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Setter
@Getter
public class AuthorizationObject {
    private Set<Role> roles = new HashSet<>();
    private Set<Permission> permissions = new HashSet<>();
}
