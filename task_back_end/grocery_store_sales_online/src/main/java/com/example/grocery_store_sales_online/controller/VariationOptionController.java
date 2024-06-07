package com.example.grocery_store_sales_online.controller;

import com.example.grocery_store_sales_online.model.product.VariationOption;
import com.example.grocery_store_sales_online.payload.ApiResponse;
import com.example.grocery_store_sales_online.service.variationOption.IVariationOptionService;
import com.example.grocery_store_sales_online.service.variationOption.VariationOptionService;
import com.example.grocery_store_sales_online.utils.QueryListResult;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequestMapping("/products-variation-option")
@RestController
@RequiredArgsConstructor
public class VariationOptionController {
    private final IVariationOptionService variationOptionService;
    @GetMapping("")
    public ResponseEntity<ApiResponse<QueryListResult<VariationOption>>> getListResult(){
        QueryListResult<VariationOption> variationOptions = variationOptionService.getListResult("");
        ApiResponse<QueryListResult<VariationOption>> result = new ApiResponse<>();
        if(variationOptions.getResult().isEmpty()){
            result=new ApiResponse<>(404,"Dữ liệu trống");
            return new ResponseEntity<>(result, HttpStatus.NO_CONTENT);
        }else{
            result= new ApiResponse<>(200,"Lấy dữ liệu thành công",variationOptions);
            return new ResponseEntity<>(result, HttpStatus.NO_CONTENT);
        }
    }
//    @PostMapping("/add")
//    public ResponseEntity<ApiResponse> saveVariationOption(@RequestBody )
}
