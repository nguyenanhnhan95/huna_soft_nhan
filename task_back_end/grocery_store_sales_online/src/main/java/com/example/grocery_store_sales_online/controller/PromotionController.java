package com.example.grocery_store_sales_online.controller;
import com.example.grocery_store_sales_online.dto.shop.PromotionDto;
import com.example.grocery_store_sales_online.enums.EResponseStatus;
import com.example.grocery_store_sales_online.model.product.Variation;
import com.example.grocery_store_sales_online.model.shop.Promotion;
import com.example.grocery_store_sales_online.payload.ApiResponse;
import com.example.grocery_store_sales_online.service.promotion.IPromotionService;
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

@RestController
@RequestMapping("/shop-promotion")
@RequiredArgsConstructor
public class PromotionController {
    private final IPromotionService promotionService;
    @GetMapping("/search")
    public ResponseEntity<ApiResponse<QueryListResult<Promotion>>> getListResult(@RequestParam("query") String queryParameter) {
        QueryListResult<Promotion> promotions = promotionService.getListResult(queryParameter);
        ApiResponse<QueryListResult<Promotion>> result = new ApiResponse<>();
        if (promotions.getResult().isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            result = new ApiResponse<>(EResponseStatus.FETCH_DATA_SUCCESS.getCode(), EResponseStatus.FETCH_DATA_SUCCESS.getLabel(), promotions);
            return new ResponseEntity<>(result, HttpStatus.OK);
        }
    }
    @GetMapping("")
    public ResponseEntity<ApiResponse<List<Promotion>>> findAll() {
        List<Promotion> promotions = promotionService.findAll();
        ApiResponse<List<Promotion>> result = new ApiResponse<>();
        if (promotions.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            result = new ApiResponse<>(EResponseStatus.FETCH_DATA_SUCCESS.getCode(), EResponseStatus.FETCH_DATA_SUCCESS.getLabel(), promotions);
            return new ResponseEntity<>(result, HttpStatus.OK);
        }
    }
    @PostMapping("")
    public ResponseEntity<?> saveModel(@Valid @RequestBody PromotionDto promotionDto, BindingResult bindingResult) {
        if (promotionService.findByCode(promotionDto.getCode()).isPresent()) {
            bindingResult.addError(new FieldError("promotionDto", "code", "Mã code đã tồn tại"));
        }
        if (bindingResult.hasErrors()) {
            Map<String, String> errors = new HashMap<>();
            for (FieldError error : bindingResult.getFieldErrors()) {
                errors.put(error.getField(), error.getDefaultMessage());
            }
            ApiResponse apiResponse = new ApiResponse<>(EResponseStatus.ENTER_DATA_FAIL.getCode(), EResponseStatus.ENTER_DATA_FAIL.getLabel(),errors);
            return ResponseEntity.badRequest().body(apiResponse);
        }
        Promotion promotion = new Promotion();
        promotion.setName(promotionDto.getName());
        promotion.setDescription(promotionDto.getDescription());
        promotion.setCode(promotionDto.getCode());
        promotion.setDiscountRate(promotionDto.getDiscountRate());
        promotion.setStartDate(promotionDto.getStartDate());
        promotion.setEndDate(promotionDto.getEndDate());
        promotionService.saveModel(promotion);
        ApiResponse apiResponse = new ApiResponse<>(EResponseStatus.SAVE_SUCCESS.getCode(), EResponseStatus.SAVE_SUCCESS.getLabel());
        return ResponseEntity.ok().body(apiResponse);
    }
    @PatchMapping("/")
    public ResponseEntity<?> editModel(@PathParam("id") Long id, @Valid @RequestBody PromotionDto promotionDto, BindingResult bindingResult) {
        if (promotionService.findByCode(promotionDto.getCode()).isEmpty()) {
            ApiResponse apiResponse = new ApiResponse<>(EResponseStatus.NO_EXISTING.getCode(), EResponseStatus.NO_EXISTING.getLabel());
            return ResponseEntity.badRequest().body(apiResponse);
        }
        if (bindingResult.hasErrors()) {
            Map<String, String> errors = new HashMap<>();
            for (FieldError error : bindingResult.getFieldErrors()) {
                errors.put(error.getField(), error.getDefaultMessage());
            }
            ApiResponse apiResponse = new ApiResponse<>(EResponseStatus.ENTER_DATA_FAIL.getCode(), EResponseStatus.ENTER_DATA_FAIL.getLabel(),errors);
            return ResponseEntity.badRequest().body(apiResponse);
        }
        Promotion promotion = new Promotion();
        promotion.setName(promotionDto.getName());
        promotion.setDescription(promotionDto.getDescription());
        promotion.setCode(promotionDto.getCode());
        promotion.setDiscountRate(promotionDto.getDiscountRate());
        promotion.setStartDate(promotionDto.getStartDate());
        promotion.setEndDate(promotionDto.getEndDate());
        promotionService.updateModel(id,promotion);
        ApiResponse apiResponse = new ApiResponse<>(EResponseStatus.EDIT_SUCCESS.getCode(), EResponseStatus.EDIT_SUCCESS.getLabel());
        return ResponseEntity.ok().body(apiResponse);
    }
    @DeleteMapping("/")
    public ResponseEntity<?> deleteModel(@RequestParam("id") Long id){
        Optional<Promotion> promotion = promotionService.findById(id);
        if(promotion.isPresent()){
            promotionService.deleteModel(promotion.get());
            ApiResponse apiResponse = new ApiResponse<>(EResponseStatus.DELETE_SUCCESS.getCode(),EResponseStatus.DELETE_SUCCESS.getLabel());
            return new ResponseEntity<>(apiResponse,HttpStatus.OK);
        }else {
            ApiResponse apiResponse = new ApiResponse<>(EResponseStatus.DELETE_FAIL.getCode(), EResponseStatus.DELETE_FAIL.getLabel());
            return new ResponseEntity<>(apiResponse,HttpStatus.BAD_REQUEST);
        }
    }
    @GetMapping ("/")
    public ResponseEntity<?> findByIdModel(@RequestParam("id") Long id){
        Optional<Promotion> promotion = promotionService.findById(id);
        if(promotion.isPresent()){
            ApiResponse apiResponse = new ApiResponse<>(EResponseStatus.FETCH_DATA_SUCCESS.getCode(), EResponseStatus.FETCH_DATA_SUCCESS.getLabel(),promotion);
            return new ResponseEntity<>(apiResponse,HttpStatus.OK);
        }else {
            ApiResponse apiResponse = new ApiResponse<>(EResponseStatus.FETCH_DATA_FAIL.getCode(), EResponseStatus.FETCH_DATA_FAIL.getLabel());
            return new ResponseEntity<>(apiResponse,HttpStatus.BAD_REQUEST);
        }
    }
    @GetMapping("/codes")
    public ResponseEntity<ApiResponse<List<Promotion>>> getListCode(){
        List<Promotion> promotions = promotionService.getListCode();
        ApiResponse<List<Promotion>> result = new ApiResponse<>();
        if(promotions.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }else {
            result = new ApiResponse<>(EResponseStatus.FETCH_DATA_SUCCESS.getCode(), EResponseStatus.FETCH_DATA_SUCCESS.getLabel(), promotions);
            return new ResponseEntity<>(result, HttpStatus.OK);
        }
    }
}
