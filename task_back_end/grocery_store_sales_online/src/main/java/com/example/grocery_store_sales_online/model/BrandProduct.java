package com.example.grocery_store_sales_online.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "brand_product")
public class BrandProduct extends Model{
    private String name;
    private String address;
}
