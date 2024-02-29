package com.example.grocery_store_sales_online.service.test;

import com.example.grocery_store_sales_online.model.TestEntity;
import com.example.grocery_store_sales_online.repository.employee.TestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TestService {
    @Autowired
    private TestRepository testRepository;
    public boolean saveTest(TestEntity testEntity){
        try {
            testRepository.save(testEntity);
            return true;
        }catch (Exception  e){
            System.out.println(e.getMessage());
            return false;
        }
    }
}
