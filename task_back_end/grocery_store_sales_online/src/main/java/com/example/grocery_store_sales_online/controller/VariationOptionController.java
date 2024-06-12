package com.example.grocery_store_sales_online.controller;

import com.example.grocery_store_sales_online.dto.product.VariationOptionDto;
import com.example.grocery_store_sales_online.enums.EResponseStatus;
import com.example.grocery_store_sales_online.model.product.VariationOption;
import com.example.grocery_store_sales_online.payload.ApiResponse;
import com.example.grocery_store_sales_online.service.variation.IVariationService;
import com.example.grocery_store_sales_online.service.variationOption.IVariationOptionService;
import com.example.grocery_store_sales_online.utils.QueryListResult;
import jakarta.validation.Valid;
import jakarta.websocket.server.PathParam;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;


@RequestMapping("/products-variation-option")
@RestController
@RequiredArgsConstructor
public class VariationOptionController {
    private final IVariationOptionService variationOptionService;

    private final IVariationService variationService;
    @GetMapping("/search")
    public ResponseEntity<ApiResponse<QueryListResult<VariationOption>>> getListResult(@RequestParam("query") String queryParameter) {
        QueryListResult<VariationOption> variationOptions = variationOptionService.getListResult(queryParameter);
        ApiResponse<QueryListResult<VariationOption>> result = new ApiResponse<>();
        if (variationOptions.getResult().isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            result = new ApiResponse<>(EResponseStatus.FETCH_DATA_SUCCESS.getCode(), EResponseStatus.FETCH_DATA_SUCCESS.getLabel(),
                    variationOptions);
            return new ResponseEntity<>(result, HttpStatus.OK);
        }
    }
    @GetMapping("")
    public ResponseEntity<ApiResponse<List<VariationOption>>> findAll() {
        List<VariationOption> variationOptions = variationOptionService.findAll();
        ApiResponse<List<VariationOption>> result = new ApiResponse<>();
        if (variationOptions.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            result =new ApiResponse<>(EResponseStatus.FETCH_DATA_SUCCESS.getCode(), EResponseStatus.FETCH_DATA_SUCCESS.getLabel(),
                    variationOptions);
            return new ResponseEntity<>(result, HttpStatus.OK);
        }
    }
    @PostMapping("")
    public ResponseEntity<?> saveModel(@Valid @RequestBody VariationOptionDto variationOptionDto, BindingResult bindingResult) {
        if (variationOptionDto ==null ||variationService.findById(variationOptionDto.getVariation().getId()).isEmpty()) {
            ApiResponse apiResponse = new ApiResponse<>(EResponseStatus.SAVE_FAIL.getCode(), EResponseStatus.SAVE_FAIL.getLabel());
            return ResponseEntity.badRequest().body(apiResponse);
        }
        if (variationOptionService.findByName(variationOptionDto.getName().trim()).isPresent()) {
            bindingResult.addError(new FieldError("variationOptionDto", "name", "Tên hình thức sản phẩm tồn tại"));
        }
        if (bindingResult.hasErrors()) {
            Map<String, String> errors = new HashMap<>();
            for (FieldError error : bindingResult.getFieldErrors()) {
                errors.put(error.getField(), error.getDefaultMessage());
            }
            ApiResponse apiResponse = new ApiResponse<>(EResponseStatus.ENTER_DATA_FAIL.getCode(), EResponseStatus.ENTER_DATA_FAIL.getLabel(),errors);
            return ResponseEntity.badRequest().body(apiResponse);
        }
        VariationOption variationOption = new VariationOption();
        variationOption.setVariation(variationOptionDto.getVariation());
        variationOption.setName(variationOptionDto.getName());
        variationOption.setDescription(variationOptionDto.getDescription());
        variationOptionService.saveModel(variationOption);
        ApiResponse apiResponse = new ApiResponse<>(EResponseStatus.SAVE_SUCCESS.getCode(), EResponseStatus.SAVE_SUCCESS.getLabel());
        return ResponseEntity.ok().body(apiResponse);
    }
    @PatchMapping("/")
    public ResponseEntity<?> editModel(@PathParam("id") Long id, @Valid @RequestBody VariationOptionDto variationOptionDto, BindingResult bindingResult) {
        if (id==null || variationOptionDto==null || variationOptionService.findById(id).isEmpty()) {
            ApiResponse apiResponse = new ApiResponse<>(EResponseStatus.NO_EXISTING.getCode(), EResponseStatus.NO_EXISTING.getLabel());
            return new ResponseEntity<>(apiResponse,HttpStatus.BAD_REQUEST);
        }
        if (bindingResult.hasErrors()) {
            Map<String, String> errors = new HashMap<>();
            for (FieldError error : bindingResult.getFieldErrors()) {
                errors.put(error.getField(), error.getDefaultMessage());
            }
            ApiResponse apiResponse = new ApiResponse<>(EResponseStatus.ENTER_DATA_FAIL.getCode(), EResponseStatus.ENTER_DATA_FAIL.getLabel(),errors);
            return ResponseEntity.badRequest().body(apiResponse);
        }
        VariationOption variationOption = new VariationOption();
        variationOption.setVariation(variationOptionDto.getVariation());
        variationOption.setName(variationOptionDto.getName());
        variationOption.setDescription(variationOptionDto.getDescription());
        variationOptionService.updateModel(id,variationOption);
        ApiResponse apiResponse = new ApiResponse<>(EResponseStatus.EDIT_SUCCESS.getCode(), EResponseStatus.EDIT_SUCCESS.getLabel());
        return ResponseEntity.ok().body(apiResponse);
    }
    @DeleteMapping("/")
    public ResponseEntity<?> deleteModel(@RequestParam("id") Long id){
        Optional<VariationOption> variationOption = variationOptionService.findById(id);
        if(variationOption.isPresent()){
            variationOptionService.deleteModel(variationOption.get());
            ApiResponse apiResponse = new ApiResponse<>(EResponseStatus.DELETE_SUCCESS.getCode(),EResponseStatus.DELETE_SUCCESS.getLabel());
            return new ResponseEntity<>(apiResponse,HttpStatus.OK);
        }else {
            ApiResponse apiResponse = new ApiResponse<>(EResponseStatus.DELETE_FAIL.getCode(), EResponseStatus.DELETE_FAIL.getLabel());
            return new ResponseEntity<>(apiResponse,HttpStatus.BAD_REQUEST);
        }
    }
    @GetMapping ("/")
    public ResponseEntity<?> findByIdModel(@RequestParam("id") Long id){
        Optional<VariationOption> variationOption = variationOptionService.findById(id);
        if(variationOption.isPresent()){
            ApiResponse apiResponse = new ApiResponse<>(EResponseStatus.FETCH_DATA_SUCCESS.getCode(), EResponseStatus.FETCH_DATA_SUCCESS.getLabel(),variationOption);
            return new ResponseEntity<>(apiResponse,HttpStatus.OK);
        }else {
            ApiResponse apiResponse = new ApiResponse<>(EResponseStatus.FETCH_DATA_FAIL.getCode(), EResponseStatus.FETCH_DATA_FAIL.getLabel());
            return new ResponseEntity<>(apiResponse,HttpStatus.BAD_REQUEST);
        }
    }
}
