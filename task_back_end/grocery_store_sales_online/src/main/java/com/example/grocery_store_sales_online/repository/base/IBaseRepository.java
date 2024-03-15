package com.example.grocery_store_sales_online.repository.base;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

import java.util.Optional;

@NoRepositoryBean
public interface IBaseRepository<T,ID> extends JpaRepository<T,ID>{

}
