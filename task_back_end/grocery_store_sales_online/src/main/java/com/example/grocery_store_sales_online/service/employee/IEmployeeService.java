package com.example.grocery_store_sales_online.service.employee;

import com.example.grocery_store_sales_online.model.Employee;
import com.example.grocery_store_sales_online.util.QueryListResult;
import com.example.grocery_store_sales_online.util.QueryParameter;

public interface IEmployeeService<Employee>  {
    QueryListResult<Employee> getAll(QueryParameter queryParameter);
}
