package com.example.shop_online_supply.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@RestController
@RequestMapping("/test")
public class TestController {
    private static final Logger logger = LoggerFactory.getLogger(TestController.class);
    @PersistenceContext
    private EntityManager entityManager;

    @GetMapping
    public String checkEntityManager() {
        if (entityManager != null) {
            logger.info("EntityManager is not null");
            return "EntityManager is not null";
        } else {
            logger.error("EntityManager is null");
            return "EntityManager is null";
        }
    }
}
