package com.example.grocery_store_sales_online.service.variationOption;

import com.example.grocery_store_sales_online.model.product.VariationOption;
import com.example.grocery_store_sales_online.service.common.*;

public interface IVariationOptionService extends IFindByIdAble<VariationOption,Long>, ISaveModelAble<VariationOption>, IFindAll<VariationOption>,
        IFindByNameListAble<VariationOption>, IGetResultListAble<VariationOption>,IDeleteModelAble<VariationOption>,IUpdateModelAble<VariationOption,Long> {

}
