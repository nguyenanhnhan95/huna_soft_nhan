package com.example.grocery_store_sales_online.model;

import com.example.grocery_store_sales_online.enums.AuthProvider;
import com.example.grocery_store_sales_online.enums.EUserStatus;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;



import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "user")
@Getter
@Setter
public class User extends Model{

    private String name;
    private String phone;
    private String email;
    private String imageUrl;
    private Boolean emailVerified = false;
    @JsonIgnore
    private String password;
    @NotNull
    @Enumerated(EnumType.STRING)
    private AuthProvider provider;
    private boolean enable;
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "user_role",joinColumns = {@JoinColumn(name="user_id")
    },inverseJoinColumns = {@JoinColumn(name="role_id")})
    private Set<Role> roles = new HashSet<>();
    @Override
    public String toString() {
        return super.toString()+""+this.getName()+""+this.getRoles();
    }

}
