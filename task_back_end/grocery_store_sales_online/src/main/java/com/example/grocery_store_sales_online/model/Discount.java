package com.example.grocery_store_sales_online.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "discount")
@Getter
@Setter
public class Discount extends Model{
    private String name;
    @Column(columnDefinition = "longtext")
    private String description;
    private Double discountPercent;
    boolean active;

}
