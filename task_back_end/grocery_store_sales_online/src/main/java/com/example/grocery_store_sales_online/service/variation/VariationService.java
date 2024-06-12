package com.example.grocery_store_sales_online.service.variation;

import com.example.grocery_store_sales_online.model.product.Variation;
import com.example.grocery_store_sales_online.repository.variation.IVariationJpaRepository;
import com.example.grocery_store_sales_online.repository.variation.VariationRepository;
import com.example.grocery_store_sales_online.security.UserPrincipal;
import com.example.grocery_store_sales_online.service.base.BaseService;
import com.example.grocery_store_sales_online.utils.QueryListResult;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class VariationService extends BaseService implements IVariationService{
    private final VariationRepository variationRepository;
    private final IVariationJpaRepository variationJpaRepository;
    @Override
    public Optional<Variation> findById(Long id) {
        Assert.notNull(id, "Id must not be null");
        return variationRepository.findById(id);
    }

    @Override
    public Optional<Variation> findByName(String name) {
        Assert.notNull(name, "Id must not be null");
        return variationRepository.findByName(name);
    }

    @Override
    public QueryListResult<Variation> getListResult(String queryParameter) {
        return variationRepository.getListResult(readJsonQuery(queryParameter));
    }

    @Override
    public Variation saveModel(Variation model) {
        Assert.notNull(model, "Id must not be null");
        UserPrincipal userPrincipal =getCurrentUser();
        if(userPrincipal!=null){
            model.setPersonCreate(userPrincipal.getName());
        }
        setMetaData(model);
        return variationRepository.saveModel(model);
    }


    @Override
    public void deleteModel(Variation variation) {
        variationRepository.deleteById(variation.getId());
    }

    @Override
    public Variation updateModel(Long id, Variation newVariation) {
        Assert.notNull(newVariation, "Id must not be null");
        Variation variation = findById(id).orElse(null);
        if(variation!=null){
            UserPrincipal userPrincipal =getCurrentUser();
            if(userPrincipal!=null){
                variation.setPersonEdit(userPrincipal.getName());
            }
            setMetaData(variation);
            variation.setDescription(newVariation.getDescription());
            variation.setName(newVariation.getName());
            return variationRepository.saveModel(variation);
        }else {
            return null;
        }
    }

    @Override
    public List<Variation> findAll() {
        return variationRepository.findAll();
    }
}
