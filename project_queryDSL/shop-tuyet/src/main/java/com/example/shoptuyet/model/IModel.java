package com.example.shoptuyet.model;

public interface IModel {
    Object getId();
    boolean inUse();
    boolean noId();
    void setDeleted(boolean deleted);
}
