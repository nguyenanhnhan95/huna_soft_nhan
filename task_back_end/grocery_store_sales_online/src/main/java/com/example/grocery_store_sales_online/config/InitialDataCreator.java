package com.example.grocery_store_sales_online.config;


import com.example.grocery_store_sales_online.enums.AuthProvider;
import com.example.grocery_store_sales_online.enums.EUserStatus;
import com.example.grocery_store_sales_online.model.Employee;
import com.example.grocery_store_sales_online.model.Role;
import com.example.grocery_store_sales_online.service.employee.EmployeeService;
import com.example.grocery_store_sales_online.service.employee.IEmployeeService;
import com.example.grocery_store_sales_online.service.role.RoleService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


@Component
@RequiredArgsConstructor
public class InitialDataCreator implements ApplicationListener<ApplicationReadyEvent> {

    private final AuthorizationProperties authorizationProperties;
    private final RoleService roleService;
    private final EmployeeService employeeService;
    private final PasswordEncoder passwordEncoder;

    @Override
    @Transactional
    public void onApplicationEvent(ApplicationReadyEvent event) {
        initRole();
        initManager();
    }

    public void initRole() {
        for (Role role : authorizationProperties.getRoles()) {
            createUpdateRole(role);
        }
    }

    public void initManager() {
        boolean noUserCreated = employeeService.findAll().isEmpty();
        if (noUserCreated) {
            Employee admin = new Employee();
            admin.setName("Admin");
            admin.setPassword(passwordEncoder.encode("123123"));
            admin.setStatusUser(EUserStatus.ACTIVATED);
            admin.setProviderId(AuthProvider.local.toString());
            Role roleAdmin = roleService.findByAlias("ROLE_ADMIN");
            if (roleAdmin != null) {
                Set<Role> roles = new HashSet<Role>();
                roles.add(roleAdmin);
                admin.setRoles(roles);
            }
            employeeService.saveEmployee(admin);
        }
    }

    private void createUpdateRole(Role role) {
        Role current = roleService.findByAlias(role.getAlias());
        if (current != null) {
            current.setDescription(role.getDescription());
            current.setName(role.getName());
            if (current.getPermissions().isEmpty()) {
                current.setPermissions(role.getPermissions());
            }
            roleService.saveRole(current);
        } else {
            roleService.saveRole(role);
        }
    }

    @Override
    public boolean supportsAsyncExecution() {
        return ApplicationListener.super.supportsAsyncExecution();
    }
}
