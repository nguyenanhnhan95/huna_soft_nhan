package com.example.grocery_store_sales_online.service.productCategory;

import com.example.grocery_store_sales_online.model.product.ProductCategory;
import com.example.grocery_store_sales_online.repository.productCategory.ProductCategoryRepository;
import com.example.grocery_store_sales_online.service.base.BaseService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProductCategoryService extends BaseService implements IProductCategoryService {
    private final ProductCategoryRepository productCategoryRepository;
    Logger logger = LoggerFactory.getLogger(ProductCategoryService.class);
    @Override
    public ProductCategory saveProductCategory(ProductCategory productCategory) {
        setMetaData(productCategory);
        return Optional.of(productCategoryRepository.save(productCategory)).orElse(null);

    }

    @Override
    public ProductCategory findByHref(String href) {
        return productCategoryRepository.findByHref(href).orElse(null);
    }

    @Override
    public List<ProductCategory> listProductCategoryChildren(ProductCategory productCategory) {
        return productCategoryRepository.listProductCategoryChildren(productCategory);
    }

    @Override
    public List<ProductCategory> findAllProductCategories() {
        List<ProductCategory> productCategories =productCategoryRepository.findAllParent();
        productCategories.forEach(each->{
            this.listProductCategoryChildren(each).forEach(children->{
                children.setParentCategory(null);
            });
            each.setChildren(this.listProductCategoryChildren(each));
        });
        return productCategories;
    }

}
