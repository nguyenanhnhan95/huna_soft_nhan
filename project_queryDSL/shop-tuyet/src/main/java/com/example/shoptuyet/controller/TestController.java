package com.example.shoptuyet.controller;

import com.example.shoptuyet.config.AuthorizationProperties;
import com.example.shoptuyet.model.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Set;

@RestController
@RequestMapping("test")
public class TestController {
    @Autowired
    private AuthorizationProperties authorizationProperties;
    @GetMapping
    public ResponseEntity<?> testData(){
        Set<Role> roles=authorizationProperties.getRoles();
        return new ResponseEntity<>(authorizationProperties.getRoles(), HttpStatus.OK);
    }
}
