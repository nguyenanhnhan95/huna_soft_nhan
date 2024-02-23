package com.example.shop_online_supply.enums;



import com.example.shop_online_supply.components.IEnumComboItem;
import lombok.Getter;

public enum ENameRegister implements IEnumComboItem {
    EMAIL("Đăng nhập bằng email"),FACEBOOK("Đăng Nhập bằng facebook"),NAME("Nhập tên đăng nhập");
    ENameRegister(String text){
        this.text=text;
    }
    @Getter
    private String text;

    @Override
    public String getLabel() {
        return text;
    }
}
