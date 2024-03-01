package com.example.grocery_store_sales_online.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "product_category")
@Getter
@Setter
public class ProductCategory extends Model{
    private String name;
    private String desc;

}
