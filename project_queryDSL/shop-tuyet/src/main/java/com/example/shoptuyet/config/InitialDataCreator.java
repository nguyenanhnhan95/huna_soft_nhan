package com.example.shoptuyet.config;

import com.example.shoptuyet.model.Role;
import com.example.shoptuyet.service.role.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Component;

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

    }
    public void initRole(){

    }
    private void createUpdateRole(Role role) {
      /*  Role current = roleService.findByAlias(role.getAlias());
        if (current != null) {
            current.setDescription(role.getDescription());
            current.setName(role.getName());
            if (current.getPermissions().isEmpty()) {
                current.setPermissions(role.getPermissions());
            }
            roleService.saveModel(current);
        } else {
            roleService.saveModel(role);
        }*/
    }
    @Override
    public boolean supportsAsyncExecution() {
        return ApplicationListener.super.supportsAsyncExecution();
    }
}
