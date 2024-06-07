package com.example.grocery_store_sales_online.repository.variationOption;

import com.example.grocery_store_sales_online.model.product.QVariationOption;
import com.example.grocery_store_sales_online.model.product.VariationOption;
import com.example.grocery_store_sales_online.repository.base.BaseRepository;
import jakarta.persistence.EntityManager;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public class VariationOptionRepository extends BaseRepository<VariationOption,Long> implements IVariationOptionRepository {
    protected QVariationOption variationOption = QVariationOption.variationOption;
    public VariationOptionRepository( EntityManager em) {
        super(VariationOption.class, em);
    }

    @Override
    public Optional<VariationOption> findByName(String name) {
        return Optional.empty();
    }
}
