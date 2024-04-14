package com.example.grocery_store_sales_online.model;

import com.example.grocery_store_sales_online.enums.AuthProvider;
import com.example.grocery_store_sales_online.enums.ETypeCustomer;
import com.example.grocery_store_sales_online.enums.EUserStatus;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;


import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "user")
@Getter
@Setter
public class User extends Person implements Serializable {
    private static final long serialVersionUID=1479437896339057579L;
    private Boolean emailVerified = false;

    @Column
    @Enumerated(EnumType.STRING)
    private ETypeCustomer typeCustomer;

    @NotNull
    @Enumerated(EnumType.STRING)
    private AuthProvider provider;
    private boolean enable;
    @ManyToMany(cascade = CascadeType.MERGE,fetch = FetchType.EAGER)
    @JoinTable(name = "user_role",joinColumns = {@JoinColumn(name="user_id")
    },inverseJoinColumns = {@JoinColumn(name="role_id")})
    private Set<Role> roles = new HashSet<>();
    @Override
    public String toString() {
        return super.toString()+""+this.getName()+""+this.getRoles();
    }


}
