package com.example.grocery_store_sales_online.model;

import com.example.grocery_store_sales_online.enums.EUserStatus;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@MappedSuperclass
public abstract class Person extends Model{
    private String name;
    private String phone;
    private String email;
    private String imageUrl;
    private String providerId;
    private Date birthOfDate;
    private Date lastLogin;
    @JsonIgnore
    private String password;
    @Column
    @Enumerated(EnumType.STRING)
    private EUserStatus statusUser;
    @Transient
    public boolean isActive(){
        return  EUserStatus.ACTIVATED.equals(this.getStatusUser());
    }
}
