package com.trevis.startup.example.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.trevis.startup.example.dto.Login;
import com.trevis.startup.example.services.PasswordService;
import com.trevis.startup.example.services.UserService;
import com.trevis.startup.example.model.UserData;

@RestController
public class AuthController {

    @Autowired
    PasswordService passwordService;

    @Autowired
    UserService userService;

    @PostMapping("/auth")
    public Login tryLogin(@RequestBody Login loginRequest) {
        String username = loginRequest.login();
        String password = loginRequest.password();

        UserData user = userService.get(username);

        if (user != null && passwordService.verifyCryptography(password, user.getPassword())) {
            return new Login(username, password, true);
        } else {
            return new Login(username, password, false);
        }
    }
}
