package com.example.grocery_store_sales_online.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "product_inventory")
@Getter
@Setter
public class ProductInventory extends Model{
    private Long quality;
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "product_brand_inventory",joinColumns = {@JoinColumn(name="product_inventory_id")
    },inverseJoinColumns = {@JoinColumn(name="brand_product_id")})
    private List<BrandProduct> brandProducts=new ArrayList<>();
}
