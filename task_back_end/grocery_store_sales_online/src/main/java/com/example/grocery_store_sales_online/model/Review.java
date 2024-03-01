package com.example.grocery_store_sales_online.model;

import com.example.grocery_store_sales_online.enums.ERating;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;


@Entity
@Table(name = "review")
@Getter
@Setter
public class Review extends Model{
    private String text;
    @ManyToOne
    private Product product;
    @ManyToOne
    private User user;
    @OneToOne
    private Comment comment;
    @Enumerated(EnumType.ORDINAL)
    private ERating rating;

}
