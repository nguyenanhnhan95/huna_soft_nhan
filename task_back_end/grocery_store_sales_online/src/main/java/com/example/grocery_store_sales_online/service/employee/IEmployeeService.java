package com.example.grocery_store_sales_online.service.employee;

import com.example.grocery_store_sales_online.utils.QueryListResult;
import com.example.grocery_store_sales_online.utils.QueryParameter;

public interface IEmployeeService<Employee>  {
    QueryListResult<Employee> getAll(QueryParameter queryParameter);
}
