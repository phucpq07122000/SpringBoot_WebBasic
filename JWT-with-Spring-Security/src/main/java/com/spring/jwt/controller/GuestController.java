package com.spring.jwt.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/guest")
@CrossOrigin("http://localhost:3000")
public class GuestController {

    @GetMapping("/index")
    public ResponseEntity<String> index(){
        return ResponseEntity.ok("Welcome to my page!");
    }
}
