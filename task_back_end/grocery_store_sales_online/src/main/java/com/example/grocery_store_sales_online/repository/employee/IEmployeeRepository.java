package com.example.grocery_store_sales_online.repository.employee;

import com.example.grocery_store_sales_online.model.Employee;
import com.example.grocery_store_sales_online.repository.base.IBaseRepository;
import com.example.grocery_store_sales_online.util.QueryListResult;
import com.example.grocery_store_sales_online.util.QueryParameter;

public interface IEmployeeRepository extends IBaseRepository<Employee,Integer> {
    public QueryListResult<Employee> findAll(QueryParameter queryParameter);
}