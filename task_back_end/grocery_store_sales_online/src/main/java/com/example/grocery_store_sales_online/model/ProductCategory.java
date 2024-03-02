package com.example.grocery_store_sales_online.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "product_category")
@Getter
@Setter
public class ProductCategory extends Model{
    private String name;
    private String description;

}
