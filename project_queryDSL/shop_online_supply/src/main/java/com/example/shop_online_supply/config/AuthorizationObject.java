package com.example.shop_online_supply.config;


import com.example.shop_online_supply.model.Permission;
import com.example.shop_online_supply.model.Role;
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
