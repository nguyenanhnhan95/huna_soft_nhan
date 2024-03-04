package com.example.grocery_store_sales_online.controller;

import com.example.grocery_store_sales_online.model.Employee;
import com.example.grocery_store_sales_online.service.employee.EmployeeService;
import com.example.grocery_store_sales_online.util.QueryListResult;
import com.example.grocery_store_sales_online.util.QueryParameter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@RestController
@RequestMapping("/employees")
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;
    @GetMapping
    public ResponseEntity<QueryListResult<Employee>> getEmployees(@RequestParam("name")String name){
        return new ResponseEntity<>(employeeService.getAll(employeeService.getQueryParameter()),HttpStatus.OK);
    }
}
