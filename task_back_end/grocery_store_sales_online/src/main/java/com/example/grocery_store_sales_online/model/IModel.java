package com.example.grocery_store_sales_online.model;

public interface IModel {
    Object getId();
    boolean inUse();
    boolean noId();
    void setDeleted(boolean deleted);
}
