package com.example.grocery_store_sales_online.enums;

import com.example.grocery_store_sales_online.components.IEnumComboItem;

public enum ErrorCode implements IEnumComboItem {
    UNCATEGORIZED_EXCEPTION(9999,"Uncategorized error"),
    USER_EXISTED(1001,"User existed"),
    ACCOUNT_NOT_ACTIVE(4001,"Account not active"),
    USER_NOT_FOUND(40401,"User not found"),
    VIOLATION_CONSTRAIN(40422,"Validation error"),
    BadCredential(40423,"Sai tài khoản hoặc mật khẩu ")
    ;
    private int code;
    private String message;

    ErrorCode(int code, String message) {
        this.code = code;
        this.message = message;
    }

    public int getCode() {
        return code;
    }

    @Override
    public String getLabel() {
        return message;
    }
}
