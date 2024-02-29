package com.example.grocery_store_sales_online.repository.base;

import com.example.grocery_store_sales_online.model.Employee;
import com.example.grocery_store_sales_online.util.QueryListResult;
import com.example.grocery_store_sales_online.util.QueryParameter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

@NoRepositoryBean
public interface IBaseRepository<T,ID> extends JpaRepository<T,ID>{
    QueryListResult<T> findAll(QueryParameter queryParameter);

}
