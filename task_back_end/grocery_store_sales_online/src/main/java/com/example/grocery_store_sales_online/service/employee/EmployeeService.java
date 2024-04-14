package com.example.grocery_store_sales_online.service.employee;

import com.example.grocery_store_sales_online.model.Employee;
import com.example.grocery_store_sales_online.repository.employee.EmployeeRepository;
import com.example.grocery_store_sales_online.service.base.BaseService;
import com.example.grocery_store_sales_online.utils.QueryListResult;
import com.example.grocery_store_sales_online.utils.QueryParameter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService extends BaseService implements IEmployeeService<Employee>{
    @Autowired
    private EmployeeRepository employeeRepository;



    @Override
    public QueryListResult<Employee> findAllSearch(QueryParameter queryParameter) {
        return employeeRepository.findAll(queryParameter);
    }

    @Override
    public List<Employee> findAll() {
        return employeeRepository.findAll();
    }

    @Override
    public void saveEmployee(Employee employee) {
        setMetaData(employee);
        employeeRepository.saveModel(employee);
    }

    @Override
    public Employee findByUserName(String name) {
        return employeeRepository.findByUserName(name);
    }

    @Override
    public Optional<Employee> findById(Long id) {
        return employeeRepository.findById(id);
    }
}
