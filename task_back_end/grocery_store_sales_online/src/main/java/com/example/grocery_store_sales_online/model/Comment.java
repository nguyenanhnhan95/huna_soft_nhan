package com.example.grocery_store_sales_online.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "comments")
@Getter
@Setter
public class Comment extends Model{
    private String text;
    @OneToOne
    private User user;
    @OneToOne
    private Review review;
    @OneToMany(mappedBy = "comments", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Rely> relies;

}
