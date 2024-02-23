package com.example.shoptuyet.enums;


import com.example.shoptuyet.components.IEnumComboItem;
import lombok.Getter;

public enum EDepartment implements IEnumComboItem {
    PRESIDENT("Giám đốc"),
    MANAGE("Quản lý"),
    ACCOUNTING("Kế toán"),
    Supervisor("Bảo vệ");
    EDepartment(String text){
        this.text=text;
    }
    @Getter
    private String text;
    @Override
    public String getLabel() {
        return null;
    }
}
