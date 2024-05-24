package com.example.grocery_store_sales_online.service.role;

import com.example.grocery_store_sales_online.model.Role;
import com.example.grocery_store_sales_online.repository.role.RoleRepository;
import com.example.grocery_store_sales_online.service.base.BaseService;
import com.querydsl.jpa.impl.JPAQuery;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@RequiredArgsConstructor
@Service
public class RoleService extends BaseService implements IRoleService<Role> {
    private  final RoleRepository roleRepository;
    @Override
    public Role findByAlias(String alias) {
        return roleRepository.findByAlias(alias);
    }

    @Override
    public void saveRole(Role role) {
        setMetaData(role);
        roleRepository.save(role);
    }

    @Override
    public Optional<Role> findById(Long id) {
        return roleRepository.findById(id);
    }
}
