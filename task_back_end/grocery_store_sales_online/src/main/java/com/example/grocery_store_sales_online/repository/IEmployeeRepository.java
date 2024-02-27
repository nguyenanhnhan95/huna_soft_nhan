package com.example.grocery_store_sales_online.repository;

import com.example.grocery_store_sales_online.dto.EmployeeDto;
import com.example.grocery_store_sales_online.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface IEmployeeRepository extends JpaRepository<Employee,Integer> {
    public List<Employee> findEmployeesByName(String name);
    public List<EmployeeDto> getEmployeeDto();
    public List<Employee> getEmployees();
}
