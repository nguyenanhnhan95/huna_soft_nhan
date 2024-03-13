package com.example.grocery_store_sales_online.service.user;

import java.util.Optional;

public interface IUserService <User>{
    User findByEmail(String email);
    Boolean existsByEmail(String email);
}
