package com.example.grocery_store_sales_online.service.promotion;

import com.example.grocery_store_sales_online.model.shop.Promotion;
import com.example.grocery_store_sales_online.repository.common.IGetListCode;
import com.example.grocery_store_sales_online.repository.common.IGetListResult;
import com.example.grocery_store_sales_online.service.common.*;

public interface IPromotionService extends IDeleteModelAble<Promotion>, IFindAll<Promotion>, IFindByIdAble<Promotion,Long>
        ,IGetResultListAble<Promotion>, ISaveModelAble<Promotion>, IUpdateModelAble<Promotion,Long>,IFindByCodeAble<Promotion>, IGetListCode<Promotion> {
}
