package com.example.shop_online_supply.enums;



import com.example.shop_online_supply.components.IEnumComboItem;
import lombok.Getter;

public enum EResignEmployeeStatus implements IEnumComboItem {
    RESIGNATION("Xin nghỉ việc"), RESIGNED("Bị nghỉ việc"), DIFFERENT("Lý do khác");
    EResignEmployeeStatus(String text){
        this.text=text;
    }
    @Getter
    private String text;
    @Override
    public String getLabel() {
        return text;
    }
}
