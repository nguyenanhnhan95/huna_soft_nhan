package com.example.grocery_store_sales_online.service.base;

import com.example.grocery_store_sales_online.util.QueryParameter;
import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
public class BaseService {
    private static final int DEFAULT_SIZE = 10;
    private static final int DEFAULT_PAGE = 0;
    private static final List<Integer> PAGE_SIZE_OPTIONS = Arrays.asList(new Integer[] { 5, 10, 20, 30, 50, 70, 100 });


    public List<Integer> getPageSizeOptions() {
        return PAGE_SIZE_OPTIONS;
    }
    @Getter
    @Setter
    private QueryParameter queryParameter = QueryParameter.builder().size(DEFAULT_SIZE).page(DEFAULT_PAGE).build();


    public List<Integer> getListPageSizes() {
        List<Integer> list = new ArrayList<>();
        list.add(10);
        list.add(20);
        list.add(50);
        list.add(100);
        return list;
    }

}
