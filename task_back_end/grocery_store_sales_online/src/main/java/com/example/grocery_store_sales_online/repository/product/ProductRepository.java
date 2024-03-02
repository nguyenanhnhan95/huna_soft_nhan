package com.example.grocery_store_sales_online.repository.product;

import com.example.grocery_store_sales_online.model.Employee;
import com.example.grocery_store_sales_online.model.Product;
import com.example.grocery_store_sales_online.model.QProduct;
import com.example.grocery_store_sales_online.repository.base.BaseRepository;
import com.example.grocery_store_sales_online.util.QueryListResult;
import com.example.grocery_store_sales_online.util.QueryParameter;
import com.querydsl.jpa.impl.JPAQuery;
import io.micrometer.common.util.StringUtils;
import jakarta.persistence.EntityManager;
import org.apache.commons.collections4.MapUtils;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public class ProductRepository extends BaseRepository<Product,Long> {
    protected QProduct product=QProduct.product;
    public ProductRepository(EntityManager em) {
        super(Product.class, em);
    }

    @Override
    public QueryListResult<Product> findAll(QueryParameter queryParameter) {
        JPAQuery<Product> query = search(queryParameter.getCriterias());
        List<Product> result = page(query, queryParameter.getSize(), queryParameter.getPage()).fetch();
        long total = query.fetchCount();
        return QueryListResult.<Product>builder().result(result).total(total).build();
    }
    public JPAQuery<Product> search(Map<String, Object> params) {
        String keyword = MapUtils.getString(params, "keyword");
        if (StringUtils.isNotBlank(keyword)) {
            keyword = "%" + keyword + "%";
            return jpaQuery.select(product)
                    .from(product)
                    .where(product.name.like(keyword));
        } else {
            return jpaQuery.select(product).from(product);
        }
    }

}
