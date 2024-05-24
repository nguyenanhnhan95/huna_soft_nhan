package com.example.grocery_store_sales_online.service.productCategoryService;

import com.example.grocery_store_sales_online.model.ProductCategory;

import java.util.List;
import java.util.Optional;

public interface IProductCategoryService{
    ProductCategory saveProductCategory(ProductCategory productCategory);
    ProductCategory findByHref(String href);
    List<ProductCategory> listProductCategoryChildren(ProductCategory productCategory);
    List<ProductCategory> findAllProductCategories();
}
