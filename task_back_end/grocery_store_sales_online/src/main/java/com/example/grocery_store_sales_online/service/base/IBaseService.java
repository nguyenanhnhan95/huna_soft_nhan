package com.example.grocery_store_sales_online.service.base;

import com.example.grocery_store_sales_online.util.QueryListResult;
import com.example.grocery_store_sales_online.util.QueryParameter;

public interface IBaseService<T> {
    QueryListResult<T> finAll(QueryParameter queryParameter);
}
