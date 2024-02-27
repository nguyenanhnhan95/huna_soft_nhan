package com.example.shop_online_supply.config;


import com.example.shop_online_supply.model.Role;
import com.example.shop_online_supply.service.role.RoleService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

@Component
public class InitialDataCreator implements ApplicationListener<ApplicationReadyEvent> {
    @Autowired
    private AuthorizationProperties authorizationProperties;
    @Autowired
    private RoleService roleService;
    @Override
    @Transactional
    public void onApplicationEvent(ApplicationReadyEvent event) {


        initRole();
    }
    public void initRole(){
        for (Role role: authorizationProperties.getRoles()) {
//            createUpdateRole(role);
        }
    }
//    private void createUpdateRole(Role role) {
//        Role current = roleService.findByAlias(role.getAlias());
//        if (current != null) {
//            current.setDescription(role.getDescription());
//            current.setName(role.getName());
//            if (current.getPermissions().isEmpty()) {
//                current.setPermissions(role.getPermissions());
//            }
//            roleService.saveModel(current);
//        } else {
//            roleService.saveModel(role);
//        }
//    }
    @Override
    public boolean supportsAsyncExecution() {
        return ApplicationListener.super.supportsAsyncExecution();
    }
}
