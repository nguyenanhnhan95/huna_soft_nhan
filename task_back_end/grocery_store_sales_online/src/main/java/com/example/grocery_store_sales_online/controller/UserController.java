package com.example.grocery_store_sales_online.controller;

import com.example.grocery_store_sales_online.exception.ResourceNotFoundException;
import com.example.grocery_store_sales_online.model.User;
import com.example.grocery_store_sales_online.service.user.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
public class UserController {
    private final UserService userService;
    @GetMapping
    public ResponseEntity<User> getCurrentUser(@RequestParam("email") String email){
        User user = userService.findByEmail(email);
        if(user==null){
            throw   new ResourceNotFoundException("User", "id", email);
        }else{
            return new ResponseEntity<>(user,HttpStatus.OK);
        }
    }
}
