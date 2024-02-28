package com.example.grocery_store_sales_online.model;

import com.example.grocery_store_sales_online.enums.ECountry;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.Date;
import java.util.Set;

@Getter
@Setter
@MappedSuperclass
public abstract class AbstractPerson extends Model implements Serializable {
    private static final long serialVersionUID=1479437896339057579L;
    private String personID;
    private String nameLogin;
    private String name;
    private String passwordLogin;
    private String phone;
    private  String address;
    private Date dateOfAdmission;
    private String email;
    public AbstractPerson(final String nameLogin,final String name){
        this.nameLogin=nameLogin;
        this.name=name;
    }

    public AbstractPerson() {
    }

    @OneToMany
    private Set<Image> images;

    @Column
    @Enumerated(EnumType.STRING)
    private ECountry country;

}
