package com.example.grocery_store_sales_online.controller;

import com.example.grocery_store_sales_online.model.Product;
import com.example.grocery_store_sales_online.service.product.ProductService;
import com.example.grocery_store_sales_online.util.QueryListResult;
import com.example.grocery_store_sales_online.util.QueryParameter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
//@CrossOrigin("*")
@RequestMapping("/product")
public class ProductController {
    @Autowired
    private ProductService productService;
    @GetMapping
    public ResponseEntity<QueryListResult<Product>> findProduct(@RequestBody QueryParameter queryParameter){
        System.out.println(queryParameter.getCriterias());
        return new ResponseEntity<>(productService.finAll(queryParameter), HttpStatus.OK);
    }
}
