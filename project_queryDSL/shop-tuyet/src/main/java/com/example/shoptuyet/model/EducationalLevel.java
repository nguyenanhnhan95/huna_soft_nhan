package com.example.shoptuyet.model;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Type;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="educational_level")
@Getter
@Setter
public class EducationalLevel extends Model{
    private String name;
    @Column(columnDefinition = "text")
    private String description;
}
