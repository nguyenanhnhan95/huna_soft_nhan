package com.example.grocery_store_sales_online.service.variation;

import com.example.grocery_store_sales_online.model.product.Variation;
import com.example.grocery_store_sales_online.service.common.*;

public interface IVariationService extends IFindByIdAble<Variation,Long>, ISaveModelAble<Variation>,
        IFindByNameListAble<Variation>, IGetResultListAble<Variation>, IDeleteModelAble<Variation>,IUpdateModelAble<Variation,Long> {
}
