package com.example.grocery_store_sales_online.service.variationOption;

import com.example.grocery_store_sales_online.model.product.VariationOption;
import com.example.grocery_store_sales_online.repository.variationOption.VariationOptionRepository;
import com.example.grocery_store_sales_online.utils.QueryListResult;
import com.example.grocery_store_sales_online.utils.QueryParameter;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class VariationOptionService implements IVariationOptionService{
    private final VariationOptionRepository variationOptionRepository;
    @Override
    public Optional<VariationOption> findById(Long id) {
        Assert.notNull(id, "Id must not be null");
        return variationOptionRepository.findById(id);
    }

    @Override
    public Optional<VariationOption> findByName(String name) {
        Assert.notNull(name, "Id must not be null");
        return variationOptionRepository.findByName(name);
    }

    @Override
    public VariationOption saveModel(VariationOption model) {
        return variationOptionRepository.saveModel(model);
    }

    @Override
    public QueryListResult<VariationOption> getListResult(String queryParameter) {
        return  null;
    }
}
