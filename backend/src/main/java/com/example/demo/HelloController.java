package com.example.demo;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class HelloController {

    @GetMapping("/")
    public String home() {
        return "Spring Boot backend is running 🚀";
    }

    @GetMapping("/hello")
    public String hello() {
        return "Hello from API";
    }
}

