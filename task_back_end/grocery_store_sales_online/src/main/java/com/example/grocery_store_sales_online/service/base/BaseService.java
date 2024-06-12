package com.example.grocery_store_sales_online.service.base;

import com.example.grocery_store_sales_online.model.common.Model;
import com.example.grocery_store_sales_online.security.UserPrincipal;
import com.example.grocery_store_sales_online.utils.QueryParameter;
import com.google.gson.Gson;
import com.querydsl.core.Fetchable;
import com.querydsl.core.SimpleQuery;
import com.querydsl.core.types.Expression;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.jpa.impl.JPAQuery;
import jakarta.annotation.Nullable;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;

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
    private static final List<Integer> PAGE_SIZE_OPTIONS = Arrays.asList(5, 10, 20, 30, 50, 70, 100);

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

    protected void setMetaData(Model obj) {
        if (obj.getCreateDate() == null) {
            obj.setCreateDate(new Date());
        }
        obj.setEditDate(new Date());
    }

    protected QueryParameter readJsonQuery(String queryParameter) {
        Gson g = new Gson();
        QueryParameter parameter = g.fromJson(queryParameter, QueryParameter.class);
        return parameter;
    }

    protected UserPrincipal getCurrentUser() {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        UserPrincipal userPrincipal=null;
        if (principal instanceof UserDetails) {
             userPrincipal = (UserPrincipal) principal;
        }
        return userPrincipal;
    }
    protected void setPersonCreate(Model model){
        UserPrincipal userPrincipal =getCurrentUser();
        if(userPrincipal!=null){
            model.setPersonCreate(userPrincipal.getName());
        }

    }
    protected void setPersonEdit(Model model){
        UserPrincipal userPrincipal =getCurrentUser();
        if(userPrincipal!=null){
            model.setPersonEdit(userPrincipal.getName());
        }
    }
}
