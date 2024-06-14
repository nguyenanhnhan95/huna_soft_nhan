package com.example.grocery_store_sales_online.service.promotion;

import com.example.grocery_store_sales_online.model.product.Variation;
import com.example.grocery_store_sales_online.model.shop.Promotion;
import com.example.grocery_store_sales_online.repository.Promotion.PromotionRepository;
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
public class PromotionService extends BaseService implements IPromotionService {
    private final PromotionRepository promotionRepository;

    @Override
    public QueryListResult<Promotion> getListResult(String queryParameter) {
        return promotionRepository.getListResult(readJsonQuery(queryParameter));
    }

    @Override
    public void deleteModel(Promotion model) {
        promotionRepository.deleteById(model.getId());
    }

    @Override
    public List<Promotion> findAll() {
        return promotionRepository.findAll();
    }

    @Override
    public Optional<Promotion> findById(Long id) {
        Assert.notNull(id, "Id must not be null");
        return promotionRepository.findById(id);
    }

    @Override
    public Promotion saveModel(Promotion model) {
        Assert.notNull(model, "Id must not be null");
        setPersonCreate(model);
        setMetaData(model);
        return promotionRepository.saveModel(model);
    }

    @Override
    public Promotion updateModel(Long id ,Promotion promotion) {
        Assert.notNull(promotion, "Id must not be null");
        Promotion promotionOld = findById(id).orElse(null);
        if (promotionOld != null) {
            setPersonEdit(promotionOld);
            setMetaData(promotionOld);
            promotionOld.setDescription(promotion.getDescription());
            promotionOld.setName(promotionOld.getName());
            promotionOld.setStartDate(promotion.getStartDate());
            promotionOld.setEndDate(promotion.getEndDate());
            promotionOld.setDiscountRate(promotion.getDiscountRate());
            return promotionRepository.saveModel(promotionOld);
        } else {
            return null;
        }
    }

    @Override
    public Optional<Promotion> findByCode(String code) {
        return promotionRepository.findByCode(code.trim());
    }

    @Override
    public List<Promotion> getListCode() {
        return promotionRepository.getListCode();
    }
}
