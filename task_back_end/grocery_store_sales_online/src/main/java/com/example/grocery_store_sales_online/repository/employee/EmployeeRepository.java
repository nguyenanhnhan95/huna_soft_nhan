package com.example.grocery_store_sales_online.repository.employee;

import com.example.grocery_store_sales_online.model.Employee;
import com.example.grocery_store_sales_online.model.QEmployee;
import com.example.grocery_store_sales_online.repository.base.BaseRepository;
import com.example.grocery_store_sales_online.utils.QueryListResult;
import com.example.grocery_store_sales_online.utils.QueryParameter;
import com.querydsl.jpa.impl.JPAQuery;

import io.micrometer.common.util.StringUtils;
import jakarta.persistence.EntityManager;
import org.apache.commons.collections4.MapUtils;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


import java.util.List;
import java.util.Map;

@Repository
public class EmployeeRepository extends BaseRepository<Employee,Long>  {
    protected final QEmployee employee = QEmployee.employee;

    public EmployeeRepository( EntityManager em) {
        super(Employee.class, em);
    }

    public QueryListResult<Employee> findAll(QueryParameter queryParameter) {
        JPAQuery<Employee> query = search(queryParameter.getCriterias());
        List<Employee> result = page(query, queryParameter.getSize(), queryParameter.getPage()).fetch();
        long total = query.fetchCount();
        return QueryListResult.<Employee>builder().result(result).total(total).build();
    }
    public Employee findByUserName(String name){
        return jpaQuery.select(employee).from(employee)
                .where(employee.name.eq(name)).fetchFirst();
    }

    public JPAQuery<Employee> search(Map<String, Object> params) {
        String keyword = MapUtils.getString(params, "keyword");
        if (StringUtils.isNotBlank(keyword)) {
            keyword = "%" + keyword + "%";
            return jpaQuery.select(employee)
                    .from(employee)
                    .where(employee.name.like(keyword));
        } else {
            return jpaQuery.select(employee).from(employee);
        }
    }


}
