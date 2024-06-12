package com.example.grocery_store_sales_online.service.variationOption;

import com.example.grocery_store_sales_online.model.product.Variation;
import com.example.grocery_store_sales_online.model.product.VariationOption;
import com.example.grocery_store_sales_online.repository.variationOption.VariationOptionRepository;
import com.example.grocery_store_sales_online.security.UserPrincipal;
import com.example.grocery_store_sales_online.service.base.BaseService;
import com.example.grocery_store_sales_online.utils.QueryListResult;
import com.example.grocery_store_sales_online.utils.QueryParameter;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class VariationOptionService extends BaseService implements IVariationOptionService{
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
        Assert.notNull(model, "Id must not be null");
        UserPrincipal userPrincipal =getCurrentUser();
        if(userPrincipal!=null){
            model.setPersonCreate(userPrincipal.getName());
        }
        setMetaData(model);
        return variationOptionRepository.saveModel(model);
    }

    @Override
    public QueryListResult<VariationOption> getListResult(String queryParameter) {
        return variationOptionRepository.getListResult(readJsonQuery(queryParameter));
    }

    @Override
    public List<VariationOption> findAll() {
        return variationOptionRepository.findAll();
    }

    @Override
    public void deleteModel(VariationOption model) {
        variationOptionRepository.deleteById(model.getId());
    }

    @Override
    public VariationOption updateModel(Long id, VariationOption model) {
        Assert.notNull(model, "Id must not be null");
        VariationOption variationOption = findById(id).orElse(null);
        if(variationOption!=null){
            UserPrincipal userPrincipal =getCurrentUser();
            if(userPrincipal!=null){
                variationOption.setPersonEdit(userPrincipal.getName());
            }
            setMetaData(variationOption);
            variationOption.setDescription(model.getDescription());
            variationOption.setName(model.getName());
            variationOption.setVariation(model.getVariation());
            return variationOptionRepository.saveModel(variationOption);
        }else {
            return null;
        }
    }
}
