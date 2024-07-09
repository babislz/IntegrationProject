package com.trevis.startup.example.controllers;

import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.trevis.startup.example.dto.AuthToken;
import com.trevis.startup.example.dto.Login;
import com.trevis.startup.example.model.UserData;
import com.trevis.startup.example.services.AuthService;
import com.trevis.startup.example.services.PasswordService;
import com.trevis.startup.example.services.UserService;

@RestController
public class AuthController {

    @Autowired
    AuthService authService;

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
            AuthToken token = authService.login(loginRequest);
            return new Login(username, password, true, token != null ? token.token() : null);
        } else {
            return new Login(username, password, false, null);
        }

    }
}
