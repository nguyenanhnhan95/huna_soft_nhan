package com.example.grocery_store_sales_online.security;

import com.example.grocery_store_sales_online.enums.EUserStatus;
import com.example.grocery_store_sales_online.enums.ErrorCode;
import com.example.grocery_store_sales_online.exception.ActiveException;
import com.example.grocery_store_sales_online.exception.ResourceNotFoundException;
import com.example.grocery_store_sales_online.model.Employee;
import com.example.grocery_store_sales_online.model.Role;
import com.example.grocery_store_sales_online.model.User;

import com.example.grocery_store_sales_online.service.employee.EmployeeService;
import com.example.grocery_store_sales_online.service.role.RoleService;
import com.example.grocery_store_sales_online.service.user.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.HashSet;
import java.util.Set;
import java.util.StringJoiner;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {
    private final UserService userService;
    private final EmployeeService employeeService;

    private final RoleService roleService;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String email)
            throws UsernameNotFoundException {
        User user = userService.findByEmail(email);
        if (user != null) {
            return UserPrincipal.createUser(user, "ROLE_USER");
        } else {
            Employee employee = employeeService.findByUserName(email);
            if(employee!=null){
                return UserPrincipal.createEmployee(employee, employee.getRoles());
            }
            throw new UsernameNotFoundException("User not found with : " + email);
        }
    }

    @Transactional
    public UserDetails loadUserById(Long id) {
        User user = userService.findById(id).orElse(null);
        if (user != null) {
            return UserPrincipal.createUser(user, "ROLE_USER");
        } else {
            throw new ResourceNotFoundException("User", "id", id, ErrorCode.USER_NOT_FOUND);
        }
    }
    @Transactional
    public UserDetails loadEmployeeById(Long id){
        Employee employee =employeeService.findById(id).orElse(null);
        if(employee!=null){
            return UserPrincipal.createEmployee(employee,employee.getRoles());
        }else {
            throw new ResourceNotFoundException("Nhân viên", "id", id, ErrorCode.USER_NOT_FOUND);
        }
    }

}
