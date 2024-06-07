package com.example.grocery_store_sales_online.repository.base;

import com.querydsl.core.Fetchable;
import com.querydsl.core.SimpleQuery;
import com.querydsl.core.types.Expression;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import jakarta.persistence.EntityManager;

import jakarta.persistence.EntityNotFoundException;
import jakarta.persistence.PersistenceContext;
import org.springframework.data.jpa.repository.support.SimpleJpaRepository;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.core.EntityInformation;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
@NoRepositoryBean
public abstract class BaseRepository <T,ID> extends SimpleJpaRepository<T,ID> implements IBaseRepository<T,ID>{
    @PersistenceContext
    protected EntityManager em;
    protected EntityInformation<T,ID> entityInformation;
    public BaseRepository(Class<T> domainClass, EntityManager em) {
        super(domainClass, em);
        this.em=em;
    }
    @Transactional
    public T saveModel(final T obj) {
        T a = (T) obj;
       return save((T) obj);
    }
    @Override
    public Optional<T> findByIdMandatory(ID id) {
        return Optional.ofNullable(findById(id).orElseThrow(() -> new EntityNotFoundException("Entity not found")));
    }
    @Override
    public void clear(){
        em.clear();
    }
    @Override
    public void detach(T entity){
        em.detach(entity);
    }

    @SuppressWarnings("unchecked")
    public <B, A extends SimpleQuery<?> & Fetchable<B>> A page(final A qry, int size, int page) {
        if (size < 0) { // unlimited
            return qry;
        }
        long count;
        if (qry instanceof final JPAQuery<?> jpa && !((JPAQuery<?>) qry).getMetadata().getGroupBy().isEmpty()) {
            Expression<?> pro = jpa.getMetadata().getProjection();
            if (pro == null) {
                pro = jpa.getMetadata().getJoins().get(0).getTarget();
            }
            count = jpa.select(Expressions.ZERO).fetch().size();
            jpa.select(pro);
        } else {
            count = qry.fetchCount();
        }
        if (count <= (long) page * size) {
            page = 0;
        }
        return (A) qry.offset((long) page * size).limit(size);
    }

}
