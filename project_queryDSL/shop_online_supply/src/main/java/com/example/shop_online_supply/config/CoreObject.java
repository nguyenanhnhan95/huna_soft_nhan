package com.example.shop_online_supply.config;

import com.querydsl.core.types.dsl.PathBuilderFactory;
import com.querydsl.jpa.impl.JPAQueryFactory;
import org.hibernate.Session;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.support.SimpleJpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.support.TransactionOperations;
import org.springframework.transaction.support.TransactionTemplate;

import jakarta.persistence.EntityManager;

@Component
public class CoreObject  implements ApplicationContextAware {
    private static CoreObject env;
    private static ApplicationContext appContext;

    private  EntityManager entityManager;
    protected void setCore() {
        if (env == null) {
            env = this;
        }
    }
    public CoreObject core() {
        assert env != null;
        return env;
    }
    public final EntityManager em() {

        System.out.println(appContext);
        return appContext.getBean(EntityManager.class);
    }
    public final PlatformTransactionManager transactionManager() {
        return appContext.getBean(PlatformTransactionManager.class);
    }
    public final TransactionTemplate transactioner() {
        return new TransactionTemplate(transactionManager());
    }
    public JPAQueryFactory queries() {
        return new JPAQueryFactory((javax.persistence.EntityManager) em());
    }
    public PathBuilderFactory paths() {
        return new PathBuilderFactory();
    }
    public Session session() {
        return (Session) em().getDelegate();
    }
    public <C> PagingAndSortingRepository<?, ?> repo(final Class<C> clazz) {
        return (PagingAndSortingRepository<?, ?>) appContext.getAutowireCapableBeanFactory()
                .applyBeanPostProcessorsAfterInitialization(new SimpleJpaRepository<C, Long>(clazz, (jakarta.persistence.EntityManager) em()), null);
    }
    public TransactionOperations transactionero() {
        final TransactionTemplate result = transactioner();
        result.setReadOnly(true);
        return result;
    }
    @Override
    public void setApplicationContext(ApplicationContext applicationContext){
        if (appContext == null) {
            appContext = applicationContext;
        }
    }

}
