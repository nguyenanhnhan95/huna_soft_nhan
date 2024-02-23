package com.example.shop_online_supply.common;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Builder
public class QueryListResult<T> {
    private List<T> result;
    private long total;
}
