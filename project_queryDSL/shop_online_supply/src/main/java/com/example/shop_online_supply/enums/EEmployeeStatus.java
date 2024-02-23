package com.example.shop_online_supply.enums;



import com.example.shop_online_supply.components.IEnumComboItem;
import lombok.Getter;

public enum EEmployeeStatus implements IEnumComboItem {
    DOING("Đang làm việc"),
    BREAKTIME("Thôi việc"),
    DOAGAIN("Đang làm lại");
    EEmployeeStatus(String text){
        this.text=text;
    }
    @Getter
    private String text;
    @Override
    public String getLabel() {
        return text;
    }
}
