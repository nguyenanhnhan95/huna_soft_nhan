package com.example.grocery_store_sales_online.repository.user;

import com.example.grocery_store_sales_online.model.QUser;
import com.example.grocery_store_sales_online.model.User;
import com.example.grocery_store_sales_online.repository.base.BaseRepository;
import com.example.grocery_store_sales_online.util.QueryListResult;
import com.example.grocery_store_sales_online.util.QueryParameter;
import jakarta.persistence.EntityManager;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public class UserRepository extends BaseRepository<User,Long> {
    protected final QUser user = QUser.user;
    public UserRepository( EntityManager em) {
        super(User.class, em);
    }
    public User finByEmail(String email){
        return jpaQuery.select(user).from(user).where(user.email.eq(email)).fetchOne();
    }
}
