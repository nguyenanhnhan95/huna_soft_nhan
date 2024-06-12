package com.example.grocery_store_sales_online.repository.Promotion;

import com.example.grocery_store_sales_online.model.product.Variation;
import com.example.grocery_store_sales_online.model.shop.Promotion;
import com.example.grocery_store_sales_online.model.shop.QPromotion;
import com.example.grocery_store_sales_online.repository.base.BaseRepository;
import com.example.grocery_store_sales_online.utils.QueryListResult;
import com.example.grocery_store_sales_online.utils.QueryParameter;
import com.querydsl.jpa.impl.JPAQuery;
import io.micrometer.common.util.StringUtils;
import jakarta.persistence.EntityManager;
import org.apache.commons.collections4.MapUtils;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Repository
public class PromotionRepository extends BaseRepository<Promotion, Long> implements IPromotionRepository {
    protected QPromotion promotion = QPromotion.promotion;

    public PromotionRepository(EntityManager em) {
        super(Promotion.class, em);
    }

    @Override
    public Optional<Promotion> findByName(String name) {
        JPAQuery<Promotion> jpaQuery = new JPAQuery<>(em);
        Promotion result = jpaQuery.select(promotion).from(promotion).where(promotion.name.eq(name)).fetchOne();
        return Optional.ofNullable(result);
    }

    @Override
    public QueryListResult<Promotion> getListResult(QueryParameter queryParameter) {
        JPAQuery<Promotion> query = search(queryParameter.getCriterias());
        List<Promotion> result = page(query, queryParameter.getSize(), queryParameter.getPage()).fetch();
        long total = query.fetchCount();
        return QueryListResult.<Promotion>builder().result(result).total(total).build();
    }

    public JPAQuery<Promotion> search(Map<String, Object> params) {
        JPAQuery<Promotion> jpaQuery = new JPAQuery<>(em);
        jpaQuery.select(promotion).from(promotion);
        if (params != null && !params.isEmpty()) {
            String keyword = MapUtils.getString(params, "name");
            if (StringUtils.isNotBlank(keyword)) {
                keyword = "%" + keyword + "%";
                jpaQuery.where(promotion.name.like(keyword));
            }
            Date startDate = (Date) MapUtils.getObject(params, "startDate");
            Date endDate = (Date) MapUtils.getObject(params, "endDate");
            Date now = new Date();
            if (startDate == null && endDate != null) {
                jpaQuery.where(promotion.endDate.before(now));
            } else if (startDate != null) {
                if (endDate != null) {
                    jpaQuery.where(promotion.startDate.before(now).and(promotion.endDate.after(now)));
                } else {
                    jpaQuery.where(promotion.startDate.before(now));
                }
            }
        }
        return jpaQuery;
    }

    @Override
    public Optional<Promotion> findByCode(String code) {
        JPAQuery<Promotion> jpaQuery = new JPAQuery<>(em);
        Promotion result = jpaQuery.select(promotion).from(promotion)
                .where(promotion.code.eq(code)).fetchOne();
        return Optional.ofNullable(result);
    }
}
