package com.example.grocery_store_sales_online.model;

import com.example.grocery_store_sales_online.enums.ENameRegister;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;


@Entity
@Table(name = "accounts")
@Getter
@Setter
public class Account extends Model{
    private String nameLoin;
    private String password;
    @Enumerated(EnumType.STRING)
    private ENameRegister nameRegister;
    @OneToOne
    private Employee employee;

}
