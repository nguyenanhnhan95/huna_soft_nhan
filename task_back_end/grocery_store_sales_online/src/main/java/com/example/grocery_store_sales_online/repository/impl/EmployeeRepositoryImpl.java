package com.example.grocery_store_sales_online.repository.impl;

import com.example.grocery_store_sales_online.dto.EmployeeDto;
import com.example.grocery_store_sales_online.model.Employee;
import com.example.grocery_store_sales_online.repository.IEmployeeRepository;
import com.querydsl.core.types.dsl.Expressions;
import jakarta.persistence.EntityManager;
import org.springframework.stereotype.Repository;

import java.beans.Expression;
import java.util.List;
import java.util.Optional;

@Repository
public class EmployeeRepositoryImpl extends BaseRepositoryImpl<Employee,Integer> implements IEmployeeRepository{

    public EmployeeRepositoryImpl( EntityManager em) {
        super(Employee.class, em);
    }


    @Override
    public List<Employee> findEmployeesByName(String name) {
        return jpaQueryFactory.select(employee)
                        .where(employee.name.like(Expressions.asString("%").concat(employee.name).concat("%")))
                        .fetch();
    }

    @Override
    public List<EmployeeDto> getEmployeeDto() {
        return null;
    }

    @Override
    public List<Employee> getEmployees() {
        return jpaQueryFactory.select(employee).fetch();
    }
}
