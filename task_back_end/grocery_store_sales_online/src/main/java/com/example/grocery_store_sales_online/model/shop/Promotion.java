package com.example.grocery_store_sales_online.model.shop;

import com.example.grocery_store_sales_online.model.common.Model;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Entity
@Getter
@Setter
@Table(name = "promotion")
public class Promotion extends Model {
    private String name;
    private String code;
    private String description;
    private double discountRate;
    private Date startDate;
    private Date endDate;
}
