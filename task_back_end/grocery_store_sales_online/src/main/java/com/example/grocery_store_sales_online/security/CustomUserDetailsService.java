package com.example.grocery_store_sales_online.security;

import com.example.grocery_store_sales_online.enums.ErrorCode;
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
            return UserPrincipal.create(user,"ROLE_USER");
        }else {
            Employee employee = employeeService.findByUserName(email);
            if (employee!=null){
                for (Role role: employee.getRoles()) {
                    return UserPrincipal.create(employee,role.getAlias());
                }
                throw  new IllegalStateException("Tài khoản nhân viên chưa phân quyền");
            }else{
                throw new UsernameNotFoundException("User not found with : " + email);
            }
        }
    }
    @Transactional
    public UserDetails loadUserById(Long id) {
        User user = userService.findById(id).orElse(null);
        Set<String> permission = new HashSet<>();
        if(user!=null){
            return UserPrincipal.create(user,"ROLE_USER");
        }else {
            Employee employee = employeeService.findById(id).orElse(null);
            if(employee!=null){
                StringJoiner stringJoiner = new StringJoiner("");
                employee.getRoles().forEach(s->stringJoiner.add(s.getAlias()));
                return UserPrincipal.create(employee,stringJoiner.toString());
            }else{
                throw  new ResourceNotFoundException("User", "id", id, ErrorCode.USER_NOT_FOUND);
            }
        }

    }

}
