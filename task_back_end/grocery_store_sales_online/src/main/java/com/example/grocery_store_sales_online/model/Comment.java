package com.example.grocery_store_sales_online.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "comment")
@Getter
@Setter
public class Comment extends Model{
    private String text;
    @OneToOne
    private User user;
    @OneToOne
    private Review review;
    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "comment_like",joinColumns = {@JoinColumn(name="comment_id")})
    private Set<Integer> likes = new HashSet<>();
    @OneToMany(mappedBy = "comments", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Rely> relies;

}
