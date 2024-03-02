package com.example.grocery_store_sales_online.service.product;

import com.example.grocery_store_sales_online.model.Product;
import com.example.grocery_store_sales_online.repository.product.ProductRepository;
import com.example.grocery_store_sales_online.service.base.BaseService;
import com.example.grocery_store_sales_online.service.base.IBaseService;
import com.example.grocery_store_sales_online.util.QueryListResult;
import com.example.grocery_store_sales_online.util.QueryParameter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService extends BaseService implements IBaseService<Product> {
    @Autowired
    private ProductRepository productRepository;
    @Override
    public QueryListResult<Product> finAll(QueryParameter queryParameter) {
        return productRepository.findAll(queryParameter);
    }
}
