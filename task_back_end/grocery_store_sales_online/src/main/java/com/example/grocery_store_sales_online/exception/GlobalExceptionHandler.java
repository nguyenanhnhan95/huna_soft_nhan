package com.example.grocery_store_sales_online.exception;

import com.example.grocery_store_sales_online.enums.ErrorCode;
import com.example.grocery_store_sales_online.payload.ApiResponse;
import jakarta.validation.ConstraintViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.validation.BindException;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class GlobalExceptionHandler{
    @ExceptionHandler(value = Exception.class)
    ResponseEntity<ApiResponse> handleRunTimeException(RuntimeException exception){
        ApiResponse apiResponse = new ApiResponse();
        apiResponse.setCode(ErrorCode.UNCATEGORIZED_EXCEPTION.getCode());
        apiResponse.setMessage(ErrorCode.UNCATEGORIZED_EXCEPTION.getLabel());
        return  ResponseEntity.badRequest().body(apiResponse);
    }
    @ExceptionHandler(value = ConstraintViolationException.class)
    ResponseEntity<ApiResponse> handleConstrainViolationException(ConstraintViolationException exception){
        ApiResponse apiResponse = new ApiResponse();
        apiResponse.setCode(ErrorCode.VIOLATION_CONSTRAIN.getCode());
        apiResponse.setMessage(ErrorCode.VIOLATION_CONSTRAIN.getLabel());
        return  ResponseEntity.badRequest().body(apiResponse);
    }

    @ExceptionHandler(value = AppException.class)
    ResponseEntity<ApiResponse> handleAppException(AppException exception){
        ApiResponse apiResponse = new ApiResponse();
        ErrorCode errorCode = exception.getErrorCode();
        apiResponse.setCode(errorCode.getCode());
        apiResponse.setMessage(errorCode.getLabel());
        return  ResponseEntity.badRequest().body(apiResponse);
    }
    @ExceptionHandler(value = ResourceNotFoundException.class)
    ResponseEntity<ApiResponse> handleResourceNotFoundException(ResourceNotFoundException exception){
        ApiResponse apiResponse = new ApiResponse();
        ErrorCode errorCode = exception.getErrorCode();
        apiResponse.setCode(errorCode.getCode());
        apiResponse.setMessage(errorCode.getLabel());
        return  ResponseEntity.status(HttpStatus.NOT_FOUND).body(apiResponse);
    }
    @ExceptionHandler(value = BindException.class)
    ResponseEntity<ApiResponse<Map<String,String>>> handleBindException(BindException e){
        ApiResponse<Map<String,String>> apiResponse = new ApiResponse<>();
        apiResponse.setCode(ErrorCode.VIOLATION_CONSTRAIN.getCode());
        apiResponse.setMessage(ErrorCode.VIOLATION_CONSTRAIN.getLabel());
        Map<String, String> errors = new HashMap<>();
        if (e.getBindingResult().hasErrors()) {
            for (FieldError fieldError : e.getBindingResult().getFieldErrors()) {
                errors.put(fieldError.getField(), fieldError.getDefaultMessage());
            }
        }
        apiResponse.setResult(errors);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(apiResponse);
    }
    @ExceptionHandler(value = BadCredentialsException.class)
    ResponseEntity<ApiResponse<Map<String,String>>> handleBadCredential(BadCredentialsException e){
        ApiResponse<Map<String,String>> apiResponse = new ApiResponse<>();
        apiResponse.setCode(ErrorCode.VIOLATION_CONSTRAIN.getCode());
        apiResponse.setMessage(ErrorCode.VIOLATION_CONSTRAIN.getLabel());
        Map<String, String> errors = new HashMap<>();
        errors.put("name",e.getMessage());
        apiResponse.setResult(errors);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(apiResponse);
    }


    @ExceptionHandler(value = UsernameNotFoundException.class)
    ResponseEntity<ApiResponse<Map<String,String>>> handleUsernameNotFoundException(UsernameNotFoundException e){
        ApiResponse<Map<String,String>> apiResponse = new ApiResponse<>();
        apiResponse.setCode(ErrorCode.USER_EXISTED.getCode());
        apiResponse.setMessage(ErrorCode.USER_NOT_FOUND.getLabel());
        Map<String, String> errors = new HashMap<>();
        errors.put("password","Tài khoản hoặc mật khẩu không tồn tại");
        apiResponse.setResult(errors);
        return  ResponseEntity.status(HttpStatus.FORBIDDEN).body(apiResponse);
    }
    @ExceptionHandler(value = AuthenticationException.class)
    ResponseEntity<ApiResponse> handleActiveException(AuthenticationException exception){
        ApiResponse apiResponse = new ApiResponse();
        apiResponse.setCode(4001);
        apiResponse.setMessage(exception.getMessage());
        return ResponseEntity.status(HttpStatus.LOCKED).body(apiResponse);
    }
    @ExceptionHandler(value = InvalidException.class)
    ResponseEntity<ApiResponse> handleInvalidException(InvalidException exception){
        ApiResponse apiResponse = new ApiResponse();
        ErrorCode errorCode = ErrorCode.INVALID_TOKEN;
        apiResponse.setCode(errorCode.getCode());
        apiResponse.setMessage(exception.getMessage());
        return ResponseEntity.status(HttpStatus.FORBIDDEN).body(apiResponse);
    }
//    @ExceptionHandler(value = AccessDeniedException.class)
//    ResponseEntity<ApiResponse> handleAccessDeniedException(AccessDeniedException exception){
//        ApiResponse apiResponse = new ApiResponse();
//        apiResponse.setCode(100000000);
//        apiResponse.setMessage(exception.getMessage());
//        return ResponseEntity.status(HttpStatus.FORBIDDEN).body(apiResponse);
//    }
}
