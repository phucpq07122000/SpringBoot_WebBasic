package com.spring.jwt.controller;

import com.spring.jwt.entity.User;
import com.spring.jwt.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin("http://localhost:3000")
public class UserController {

    @Autowired
    private UserRepository userRepository;
    @GetMapping("/index")
    public ResponseEntity<String> index(Principal principal){
        return ResponseEntity.ok("Welcome to user page : " + principal.getName());
    }

//    @GetMapping("/listUser")
//    public List<User> listUser(){
//        return userRepository.findAll();
//    }


    @GetMapping("/getProfile/{userName}")
    public User getProfile(@PathVariable String userName){
        User user = userRepository.findByUsername(userName);
        user.getRoles();
        return user;
    }
}
