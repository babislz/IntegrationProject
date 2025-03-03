package com.trevis.startup.example.impl;

import org.springframework.beans.factory.annotation.Autowired;

import com.trevis.startup.example.dto.AuthToken;
import com.trevis.startup.example.dto.Login;
import com.trevis.startup.example.model.UserData;
import com.trevis.startup.example.services.AuthService;
import com.trevis.startup.example.services.AuthJWTService;
import com.trevis.startup.example.services.PasswordService;
import com.trevis.startup.example.services.UserService;

public class DefaultAuthService implements AuthService {
    @Autowired
    AuthJWTService jwtService;

    @Autowired
    UserService userService;

    @Autowired
    PasswordService passService;

    @SuppressWarnings("unused")
    @Override
    public AuthToken login(Login loginUser) {
       
        UserData user = userService.get(loginUser.login());
        Long userId = user.getId();
        Integer userRole = user.getRole();

        if(user == null){
            return new AuthToken("User not found", null);
        }
        else if(!passService.verifyCryptography(loginUser.password(), user.getPassword())){
            return new AuthToken("Incorect password", null);
        }
        else{
            String token = jwtService.createJWT(userId, userRole);
            return new AuthToken("Login was succesful", token);
        }    
    }

    
}