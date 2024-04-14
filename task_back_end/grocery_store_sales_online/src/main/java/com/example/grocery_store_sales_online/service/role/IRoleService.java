package com.example.grocery_store_sales_online.service.role;

import java.util.Optional;

public interface IRoleService <Role>{
    Role findByAlias(String alias);
    void saveRole(Role role);
    Optional<Role> findById(Long id);
}
