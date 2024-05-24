package com.example.grocery_store_sales_online.repository.token;

import com.example.grocery_store_sales_online.model.InvalidatedToken;
import com.example.grocery_store_sales_online.model.QInvalidatedToken;
import com.example.grocery_store_sales_online.repository.base.BaseRepository;
import jakarta.persistence.EntityManager;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class InvalidatedTokenRepository extends BaseRepository<InvalidatedToken,Long> {
    protected QInvalidatedToken invalidatedToken=QInvalidatedToken.invalidatedToken;
    public InvalidatedTokenRepository(EntityManager em) {
        super(InvalidatedToken.class, em);
    }
    public Optional<InvalidatedToken> findByIdToken(String token){
        return Optional.ofNullable(jpaQuery.select(invalidatedToken).from(invalidatedToken)
                .where(invalidatedToken.idToken.eq(token)).fetchFirst());
    }
    public List<InvalidatedToken> findAllToken(){
        return jpaQuery.from(invalidatedToken).from(invalidatedToken).fetch();
    }
}
