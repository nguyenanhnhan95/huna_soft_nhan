package com.example.shoptuyet.util;

import com.example.shoptuyet.model.Role;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.boot.json.JsonParseException;

import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;
import java.net.URL;
import java.util.Set;

public class ResourceJsonLoader {
    public <T> T readValue(String filePath, Class<T> type) throws JsonParseException, JsonMappingException, IOException, URISyntaxException {
        ObjectMapper objectMapper = new ObjectMapper();
        File jsonFile = readMenuJsonFile(filePath);
        return objectMapper.readValue(jsonFile, type);
    }


    private File readMenuJsonFile(String filePath) throws URISyntaxException {
        URL resource = getClass().getClassLoader().getResource(filePath);
        return new File(resource.toURI());
    }
}
