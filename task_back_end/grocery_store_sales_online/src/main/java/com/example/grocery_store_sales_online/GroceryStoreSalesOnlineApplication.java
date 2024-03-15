package com.example.grocery_store_sales_online;

import com.example.grocery_store_sales_online.config.AppProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties(AppProperties.class)
public class GroceryStoreSalesOnlineApplication {

    public static void main(String[] args) {
        SpringApplication.run(GroceryStoreSalesOnlineApplication.class, args);
    }

}
