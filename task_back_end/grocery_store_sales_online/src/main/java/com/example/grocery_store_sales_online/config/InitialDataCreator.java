package com.example.grocery_store_sales_online.config;


import com.example.grocery_store_sales_online.enums.AuthProvider;
import com.example.grocery_store_sales_online.enums.EUserStatus;
import com.example.grocery_store_sales_online.model.Employee;
import com.example.grocery_store_sales_online.model.ProductCategory;
import com.example.grocery_store_sales_online.model.Role;
import com.example.grocery_store_sales_online.service.employee.EmployeeService;
import com.example.grocery_store_sales_online.service.productCategoryService.IProductCategoryService;

import com.example.grocery_store_sales_online.service.role.RoleService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashSet;
import java.util.Set;


@Component
@RequiredArgsConstructor
public class InitialDataCreator implements ApplicationListener<ApplicationReadyEvent> {
    private final AuthorizationProperties authorizationProperties;
    private final RoleService roleService;
    private final EmployeeService employeeService;
    private final IProductCategoryService productCategoryService;
    private final PasswordEncoder passwordEncoder;
    private final CategoryProductProperties categoryProductProperties;

    Logger logger = LoggerFactory.getLogger(InitialDataCreator.class);

    @Override
    @Transactional
    public void onApplicationEvent(ApplicationReadyEvent event) {
        initRole();
        initManager();
        initCategoryProduct();
    }

    public void initRole() {
        for (Role role : authorizationProperties.getRoles()) {
            createUpdateRole(role);
        }
    }

    public void initCategoryProduct() {
        for (ProductCategory productCategory : categoryProductProperties.getProductCategories()) {
            createUpdateProductCategory(productCategory);
        }
    }

    public void initManager() {
        boolean noUserCreated = employeeService.findAll().isEmpty();
        if (noUserCreated) {
            Employee admin = new Employee();
            admin.setName("Admin");
            admin.setPassword(passwordEncoder.encode("123123"));
            admin.setStatusUser(EUserStatus.ACTIVATED);
            admin.setProvider(AuthProvider.local);
            Role roleAdmin = roleService.findByAlias("ROLE_ADMIN");
            Role roleManager = roleService.findByAlias("ROLE_MANAGER");
            if (roleAdmin != null) {
                Set<Role> roles = new HashSet<Role>();
                roles.add(roleAdmin);
                roles.add(roleManager);
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

    private void createUpdateProductCategory(ProductCategory productCategory) {
        ProductCategory current = productCategoryService.findByHref(productCategory.getHref());
        if (current != null) {
            current.setHref(productCategory.getHref());
            current.setDescription(productCategory.getDescription());
            current.setName(productCategory.getName());
            if (current.getParent() == null && !productCategory.getChildren().isEmpty()) {
                for (ProductCategory each : productCategory.getChildren()) {
                    each.setParent(current);
                    createUpdateProductCategory(each);
                }
                ;
            }
            productCategoryService.saveProductCategory(current);
        } else {
            if (productCategory.getChildren() != null && productCategory.getChildren().isEmpty()) {
                productCategoryService.saveProductCategory(productCategory);
            } else {
                ProductCategory parent = productCategoryService.saveProductCategory(productCategory);
                if (parent != null) {
                    for (ProductCategory each : productCategory.getChildren()) {
                        each.setParent(parent);
                        productCategoryService.saveProductCategory(each);
                    }
                }
            }
        }
    }

    @Override
    public boolean supportsAsyncExecution() {
        return ApplicationListener.super.supportsAsyncExecution();
    }
}
