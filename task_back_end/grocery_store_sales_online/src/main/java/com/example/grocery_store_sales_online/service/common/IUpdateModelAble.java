package com.example.grocery_store_sales_online.service.common;

import java.util.Optional;

public interface IUpdateModelAble <T,ID>{
    T updateModel(ID id,T model);
}
