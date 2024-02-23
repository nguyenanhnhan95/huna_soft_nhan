package com.example.shop_online_supply.model;

public interface IModel {
    Object getId();
    boolean inUse();
    boolean noId();
    void setDeleted(boolean deleted);
}
