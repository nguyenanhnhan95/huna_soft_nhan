package com.example.grocery_store_sales_online.repository.variationOption;

import com.example.grocery_store_sales_online.model.product.VariationOption;
import com.example.grocery_store_sales_online.repository.base.IBaseRepository;

import com.example.grocery_store_sales_online.repository.common.IGetListResult;
import com.example.grocery_store_sales_online.utils.QueryListResult;
import org.springframework.data.repository.NoRepositoryBean;

import java.util.Optional;

@NoRepositoryBean
public interface IVariationOptionRepository extends IBaseRepository<VariationOption,Long>, IGetListResult<VariationOption> {
    Optional<VariationOption> findByName(String name);
}
