package com.example.grocery_store_sales_online.controller;

import com.example.grocery_store_sales_online.dto.VariationDto;
import com.example.grocery_store_sales_online.model.product.Variation;
import com.example.grocery_store_sales_online.model.product.VariationOption;
import com.example.grocery_store_sales_online.payload.ApiResponse;
import com.example.grocery_store_sales_online.service.variation.IVariationService;
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
@RequestMapping("/products-variation")
@RequiredArgsConstructor
public class VariationController {
    private final IVariationService variationService;

    @GetMapping("/search")
    public ResponseEntity<ApiResponse<QueryListResult<Variation>>> getListResult(@RequestParam("query") String queryParameter) {
        QueryListResult<Variation> variations = variationService.getListResult(queryParameter);
        ApiResponse<QueryListResult<Variation>> result = new ApiResponse<>();
        if (variations.getResult().isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            result = new ApiResponse<>(200, "Lấy dữ liệu thành công", variations);
            return new ResponseEntity<>(result, HttpStatus.OK);
        }
    }

    @PostMapping("")
    public ResponseEntity<?> saveModel(@Valid @RequestBody VariationDto variationDto, BindingResult bindingResult) {
        if (variationService.findByName(variationDto.getName().trim()).isPresent()) {
            bindingResult.addError(new FieldError("variationDto", "name", "Tên tùy chọn sản phẩm tồn tại"));
        }
        if (bindingResult.hasErrors()) {
            Map<String, String> errors = new HashMap<>();
            for (FieldError error : bindingResult.getFieldErrors()) {
                errors.put(error.getField(), error.getDefaultMessage());
            }
            ApiResponse apiResponse = new ApiResponse<>(400,"Nhập không phù hợp",errors);
            return ResponseEntity.badRequest().body(apiResponse);
        }
        Variation variation = new Variation();
        variation.setName(variationDto.getName());
        variation.setDescription(variationDto.getDescription());
        variationService.saveModel(variation);
        return ResponseEntity.ok().body("Đã lưu thành công");
    }
    @PatchMapping("/")
    public ResponseEntity<?> editModel(@PathParam("id") Long id, @Valid @RequestBody VariationDto variationDto, BindingResult bindingResult) {
        if (id==null || variationService.findById(id).isEmpty()) {
            ApiResponse apiResponse = new ApiResponse<>(400,"Dữ liệu không tồn tại!");
            return new ResponseEntity<>(apiResponse,HttpStatus.BAD_REQUEST);
        }
        if (bindingResult.hasErrors()) {
            Map<String, String> errors = new HashMap<>();
            for (FieldError error : bindingResult.getFieldErrors()) {
                errors.put(error.getField(), error.getDefaultMessage());
            }
            ApiResponse apiResponse = new ApiResponse<>(400,"Nhập không phù hợp",errors);
            return ResponseEntity.badRequest().body(apiResponse);
        }
        Variation variation = new Variation();
        variation.setName(variationDto.getName());
        variation.setDescription(variationDto.getDescription());
        variationService.updateModel(id,variation);
        return ResponseEntity.ok().body("Đã lưu thành công");
    }
    @DeleteMapping("/")
    public ResponseEntity<?> deleteModel(@RequestParam("id") Long id){
        Optional<Variation> variation = variationService.findById(id);
        if(variation.isPresent()){
            variationService.deleteModel(variation.get());
            ApiResponse apiResponse = new ApiResponse<>(200,"Bạn xóa "+variation.get().getName()+" thành công!");
            return new ResponseEntity<>(apiResponse,HttpStatus.OK);
        }else {
            ApiResponse apiResponse = new ApiResponse<>(400,"Bạn xóa "+variation.get().getName().toLowerCase()+"không thành công!");
            return new ResponseEntity<>(apiResponse,HttpStatus.BAD_REQUEST);
        }
    }
    @GetMapping ("/")
    public ResponseEntity<?> findByIdModel(@RequestParam("id") Long id){
        Optional<Variation> variation = variationService.findById(id);
        if(variation.isPresent()){
            ApiResponse apiResponse = new ApiResponse<>(200,"Lấy dữ liệu thành công ",variation);
            return new ResponseEntity<>(apiResponse,HttpStatus.OK);
        }else {
            ApiResponse apiResponse = new ApiResponse<>(400,"Lỗi try vấn dữ liệu sever!");
            return new ResponseEntity<>(apiResponse,HttpStatus.BAD_REQUEST);
        }
    }
}

