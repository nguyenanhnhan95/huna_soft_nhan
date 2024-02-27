package com.example.grocery_store_sales_online.repository.impl;

import com.example.grocery_store_sales_online.model.QEmployee;
import com.example.grocery_store_sales_online.repository.BaseRepository;
import com.querydsl.jpa.impl.JPAQueryFactory;
import jakarta.persistence.EntityManager;
import org.springframework.data.jpa.repository.support.SimpleJpaRepository;
import java.util.ArrayList;
import java.util.List;


public abstract class BaseRepositoryImpl<T,ID> extends SimpleJpaRepository<T,ID> implements BaseRepository<T,ID> {
    EntityManager em;
    JPAQueryFactory jpaQueryFactory;
    protected final QEmployee employee=QEmployee.employee;

    public BaseRepositoryImpl(Class<T> domainClass, EntityManager em) {
        super(domainClass, em);
        this.em=em;
        this.jpaQueryFactory=new JPAQueryFactory(em);
    }

    public List<Integer> getListPageSizes(){
        List<Integer> list = new ArrayList<>();
        list.add(10);
        list.add(20);
        list.add(50);
        list.add(100);
        return list;
    }


}
