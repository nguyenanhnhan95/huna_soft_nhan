package com.example.grocery_store_sales_online.enums;

import com.example.grocery_store_sales_online.components.IEnumComboItem;

public enum EResponseStatus implements IEnumComboItem {
    FETCH_DATA_SUCCESS(200,"Lấy dữ liệu thành công"),
    FETCH_DATA_FAIL(400,"Lỗi lấy dữ liệu"),
    FETCH_NO_CONTENT(204,"Dữ liệu hện tại trống"),
    SAVE_SUCCESS(201,"Đã lưu dữ liệu thành công"),
    EDIT_SUCCESS(201,"Đã cập nhập dữ liệu thành công"),
    ENTER_DATA_FAIL(400,"Lỗi nhập dữ lệu"),
    SAVE_FAIL(400,"Lỗi lưu dữ liệu"),
    EDIT_FAIL(400,"Lỗi cập nhập dữ liệu"),
    EXISTING(406,"Dữ liệu đã tồn tại"),
    NO_EXISTING(406,"Dữ liệu đã không tồn tại"),
    DELETE_SUCCESS(200,"Đã xóa dự liệu thành công"),
    DELETE_FAIL(400,"Lỗi xóa dữ liệu ");

    EResponseStatus(int code, String text) {
        this.code = code;
        this.text = text;
    }

    private final int code;
    private final String text;
    @Override
    public String getLabel() {
        return text;
    }

    public int getCode() {
        return code;
    }
}
