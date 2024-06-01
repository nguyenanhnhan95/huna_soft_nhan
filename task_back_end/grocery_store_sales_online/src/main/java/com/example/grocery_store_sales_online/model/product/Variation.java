package com.example.grocery_store_sales_online.model.product;

import com.example.grocery_store_sales_online.model.common.Model;
import com.example.grocery_store_sales_online.model.product.ProductCategory;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "variation")
public class Variation extends Model {
    private String name;
    @ManyToOne
    private Product product;
}
