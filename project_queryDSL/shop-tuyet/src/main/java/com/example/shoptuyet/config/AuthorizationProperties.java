package com.example.shoptuyet.config;

import com.example.shoptuyet.model.Permission;
import com.example.shoptuyet.model.Role;
import com.example.shoptuyet.util.ResourceJsonLoader;
import lombok.Getter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.util.HashSet;
import java.util.List;
import java.util.Set;


@Component
public class AuthorizationProperties {
    Logger logger = LoggerFactory.getLogger(AuthorizationProperties.class);

    private static final String CONFIG_FILE = "authorization.json";

    @Getter
    private Set<Role> roles = new HashSet<Role>();
    @Getter
    private Set<Permission> permissions = new HashSet<>();

    public AuthorizationProperties() {
        try {
            AuthorizationObject authorizationObject = new ResourceJsonLoader().readValue(CONFIG_FILE, AuthorizationObject.class);
            if (authorizationObject != null) {
                roles = authorizationObject.getRoles();
                permissions = authorizationObject.getPermissions();
            }
            logger.info("Initial authorization");
        } catch (Exception e) {
            logger.error("Loading authorization propeties with error: {}", e.getMessage());
        }
    }
}
