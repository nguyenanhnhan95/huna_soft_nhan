package com.example.shoptuyet.model;


import com.example.shoptuyet.enums.ENameRegister;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

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
