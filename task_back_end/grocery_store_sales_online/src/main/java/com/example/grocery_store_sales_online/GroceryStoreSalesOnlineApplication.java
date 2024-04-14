package com.example.grocery_store_sales_online;

import com.example.grocery_store_sales_online.config.AppProperties;
import com.example.grocery_store_sales_online.exception.GlobalExceptionHandler;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Import;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableConfigurationProperties(AppProperties.class)
@EnableScheduling
public class GroceryStoreSalesOnlineApplication {

    public static void main(String[] args) {
        SpringApplication.run(GroceryStoreSalesOnlineApplication.class, args);
    }

}
