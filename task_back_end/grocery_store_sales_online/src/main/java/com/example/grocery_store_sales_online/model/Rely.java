package com.example.grocery_store_sales_online.model;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "rely")
@Getter
@Setter
public class Rely extends Model{
    @ManyToOne
    private Comment comments;
}
