package com.example.grocery_store_sales_online.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "product")
@Getter
@Setter
public class Product extends Model{
    private String name;
    @Column(columnDefinition = "longtext")
    private String description;
    private Long price;
    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Review> reviews;
    @ManyToMany
    @JoinTable(name = "product_image", joinColumns = { @JoinColumn(name = "product_id") },
            inverseJoinColumns = {@JoinColumn(name = "image_id") })
    private List<Image> images = new ArrayList<>();
    @ManyToOne
    private ProductCategory productCategory;
    @ManyToOne
    private Discount discount;
    @OneToOne
    private ProductInventory productInventory;
}
