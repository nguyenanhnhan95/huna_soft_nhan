package com.example.grocery_store_sales_online.service.employee;

import com.example.grocery_store_sales_online.model.Employee;
import com.example.grocery_store_sales_online.repository.employee.EmployeeRepository;
import com.example.grocery_store_sales_online.service.base.BaseService;
import com.example.grocery_store_sales_online.utils.QueryListResult;
import com.example.grocery_store_sales_online.utils.QueryParameter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService extends BaseService implements IEmployeeService<Employee>{
    @Autowired
    private EmployeeRepository employeeRepository;



    @Override
    public QueryListResult<Employee> getAll(QueryParameter queryParameter) {
        return employeeRepository.findAll(queryParameter);
    }
}
