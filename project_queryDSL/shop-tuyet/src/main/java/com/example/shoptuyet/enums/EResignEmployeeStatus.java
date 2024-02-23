package com.example.shoptuyet.enums;


import com.example.shoptuyet.components.IEnumComboItem;
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
