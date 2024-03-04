package com.example.grocery_store_sales_online.controller;

import com.example.grocery_store_sales_online.model.Product;
import com.example.grocery_store_sales_online.service.product.ProductService;
import com.example.grocery_store_sales_online.util.QueryListResult;
import com.example.grocery_store_sales_online.util.QueryParameter;
import com.google.gson.Gson;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.HashMap;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/product")
public class ProductController {
    @Autowired
    private ProductService productService;
    @GetMapping
    public ResponseEntity<QueryListResult<Product>> findProduct(@RequestParam("query") String queryParameter){
                return new ResponseEntity<>(productService.finAll(queryParameter), HttpStatus.OK);
    }
}
