package com.example.shop_online_supply.enums;


import com.example.shop_online_supply.components.IEnumComboItem;
import lombok.Getter;

public enum EUserStatus implements IEnumComboItem {
    ACTIVATED("Đã kích hoạt","success"),
    INACTIVE("Chưa kích hoạt","secondary"),
    Lock("Đã khóa","locked");
    @Getter
    private String text;
    @Getter
    private String style;
    private EUserStatus(String text,String style){
        this.text=text;
        this.style=style;
    }
    @Override
    public String getLabel() {
        return null;
    }
}