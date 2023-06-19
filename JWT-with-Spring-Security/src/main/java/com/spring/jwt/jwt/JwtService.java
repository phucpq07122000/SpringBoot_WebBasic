package com.spring.jwt.jwt;

import com.spring.jwt.service.security.UserDetailsCustom;
import io.jsonwebtoken.Claims;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.security.Key;
@CrossOrigin("http://localhost:3000")
public interface JwtService {

    Claims extractClaims(String token);

    Key getKey();

    String generateToken(UserDetailsCustom userDetailsCustom);

    boolean isValidToken(String token);
}
