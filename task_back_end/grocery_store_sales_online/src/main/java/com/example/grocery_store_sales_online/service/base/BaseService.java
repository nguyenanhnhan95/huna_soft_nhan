package com.example.grocery_store_sales_online.service.base;

import com.example.grocery_store_sales_online.model.Model;
import com.example.grocery_store_sales_online.util.QueryParameter;
import com.querydsl.core.Fetchable;
import com.querydsl.core.SimpleQuery;
import com.querydsl.core.types.Expression;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.jpa.impl.JPAQuery;
import jakarta.annotation.Nullable;
import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Service;

import java.util.*;

public class BaseService {
    private static final int DEFAULT_SIZE = 10;
    private static final int DEFAULT_PAGE = 0;
    @Getter
    @Setter
    private @Nullable Date fromDate;
    @Getter
    @Setter
    private @Nullable Date toDate;
    @Getter
    @Setter
    private QueryParameter queryParameter = QueryParameter.builder().size(DEFAULT_SIZE).page(DEFAULT_PAGE).build();
    private static final List<Integer> PAGE_SIZE_OPTIONS = Arrays.asList(new Integer[] { 5, 10, 20, 30, 50, 70, 100 });

    public List<Integer> getPageSizeOptions() {
        return PAGE_SIZE_OPTIONS;
    }
    public List<Integer> getListPageSizes() {
        List<Integer> list = new ArrayList<>();
        list.add(10);
        list.add(20);
        list.add(50);
        list.add(100);
        return list;
    }
    public @Nullable Date getFixToDate() {
        Date fixToDate = toDate;
        if (fixToDate != null) {
            Calendar cal = Calendar.getInstance();
            cal.setTime(fixToDate);
            //cal.add(Calendar.DATE, 1);
            cal.set(Calendar.HOUR_OF_DAY, 0);
            cal.set(Calendar.MINUTE, 0);
            cal.set(Calendar.SECOND, 0);
            fixToDate = cal.getTime();
        }
        return fixToDate;
    }
    public @Nullable Date getFixFromDate() {
        Date fixFromDate = fromDate;
        if (getToDate() != null) {
            Calendar cal = Calendar.getInstance();
            cal.setTime(fixFromDate);
            //cal.add(Calendar.DATE, 1);
            cal.set(Calendar.HOUR_OF_DAY, 23);
            cal.set(Calendar.MINUTE, 59);
            cal.set(Calendar.SECOND, 59);
            fixFromDate = cal.getTime();
        }
        return fixFromDate;
    }

}