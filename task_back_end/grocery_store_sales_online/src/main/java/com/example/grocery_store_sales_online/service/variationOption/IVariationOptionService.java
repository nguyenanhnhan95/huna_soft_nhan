package com.example.grocery_store_sales_online.service.variationOption;

import com.example.grocery_store_sales_online.model.product.VariationOption;
import com.example.grocery_store_sales_online.service.common.IFindByIdAble;
import com.example.grocery_store_sales_online.service.common.IFindByNameListAble;
import com.example.grocery_store_sales_online.service.common.IGetResultListAble;
import com.example.grocery_store_sales_online.service.common.ISaveModelAble;

public interface IVariationOptionService extends IFindByIdAble<VariationOption,Long>, ISaveModelAble<VariationOption>,
        IFindByNameListAble<VariationOption>, IGetResultListAble<VariationOption> {

}
