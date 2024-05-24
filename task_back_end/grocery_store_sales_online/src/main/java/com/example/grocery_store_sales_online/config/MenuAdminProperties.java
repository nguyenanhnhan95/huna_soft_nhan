package com.example.grocery_store_sales_online.config;

import com.example.grocery_store_sales_online.components.MainMenu;
import com.example.grocery_store_sales_online.utils.ResourceJsonLoader;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.Getter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

@Component
public class MenuAdminProperties {
    Logger logger = LoggerFactory.getLogger(MenuAdminProperties.class);

    private static final String CONFIG_FILE = "menu.json";
    @Getter
    private List<MainMenu> mainMenus = new ArrayList<MainMenu>();

    public MenuAdminProperties() {
        try {
            MainMenuObject mainMenuObject = new ResourceJsonLoader().readValue(CONFIG_FILE, MainMenuObject.class);
            if (mainMenuObject != null) {
                mainMenus = mainMenuObject.getMainMenus();
            }
            logger.info("Initial authorization");
        } catch (Exception e) {
            logger.error("Loading main menu with error: {}", e.getMessage());
        }
    }
}
