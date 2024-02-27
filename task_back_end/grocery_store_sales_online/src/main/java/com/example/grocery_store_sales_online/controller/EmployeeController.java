package com.example.grocery_store_sales_online.controller;

import com.example.grocery_store_sales_online.model.Employee;
import com.example.grocery_store_sales_online.repository.impl.EmployeeRepositoryImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/employees")
public class EmployeeController {
    @Autowired
    private EmployeeRepositoryImpl employeeRepository;
    @GetMapping
    public ResponseEntity<List<Employee>> getEmployees(@RequestParam("name")String name){
        return new ResponseEntity<>(employeeRepository.findEmployeesByName(name), HttpStatus.OK);
    }
}
