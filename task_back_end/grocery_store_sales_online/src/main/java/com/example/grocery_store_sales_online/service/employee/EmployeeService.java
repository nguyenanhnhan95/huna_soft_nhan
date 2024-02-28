package com.example.grocery_store_sales_online.service.employee;

import com.example.grocery_store_sales_online.model.Employee;
import com.example.grocery_store_sales_online.repository.employee.IEmployeeRepository;
import com.example.grocery_store_sales_online.service.base.BaseService;
import com.example.grocery_store_sales_online.util.QueryListResult;
import com.example.grocery_store_sales_online.util.QueryParameter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService extends BaseService implements IEmployeeService<Employee>{
    @Autowired
    private IEmployeeRepository employeeRepository;



    @Override
    public QueryListResult<Employee> getAll(QueryParameter queryParameter) {
        return employeeRepository.findAll(queryParameter);
    }
}
