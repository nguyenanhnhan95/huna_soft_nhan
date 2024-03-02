package com.example.grocery_store_sales_online.repository.base;

import com.example.grocery_store_sales_online.model.Model;
import com.example.grocery_store_sales_online.model.QEmployee;
import com.example.grocery_store_sales_online.util.QueryParameter;
import com.querydsl.core.Fetchable;
import com.querydsl.core.SimpleQuery;
import com.querydsl.core.types.Expression;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityManager;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.jpa.repository.support.SimpleJpaRepository;
import org.springframework.data.repository.core.EntityInformation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.Assert;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

public abstract class BaseRepository <T,ID> extends SimpleJpaRepository<T,ID> implements IBaseRepository<T,ID> {
    protected EntityManager em;
    protected JPAQueryFactory jpaQueryFactory;
    protected EntityInformation<T,ID> entityInformation;
    protected JPAQuery<T> jpaQuery;
    public BaseRepository(Class<T> domainClass, EntityManager em) {
        super(domainClass, em);
        this.em=em;
        this.jpaQueryFactory=new JPAQueryFactory(em);
        this.jpaQuery=new JPAQuery<>(em);
    }
    @Transactional
    public void saveModel(final T obj) {
       save((T) obj);
    }

    @SuppressWarnings("unchecked")
    public <B, A extends SimpleQuery<?> & Fetchable<B>> A page(final A qry, int size, int page) {
        if (size < 0) { // unlimited
            return qry;
        }
        long count;
        if (qry instanceof JPAQuery && !((JPAQuery<?>) qry).getMetadata().getGroupBy().isEmpty()) {
            final JPAQuery<?> jpa = (JPAQuery<?>) qry;
            Expression<?> pro = jpa.getMetadata().getProjection();
            if (pro == null) {
                pro = jpa.getMetadata().getJoins().get(0).getTarget();
            }
            count = jpa.select(Expressions.ZERO).fetch().size();
            jpa.select(pro);
        } else {
            count = qry.fetchCount();
        }
        if (count <= page * size) {
            page = 0;
        }
        return (A) qry.offset(page * size).limit(size);
    }

}
