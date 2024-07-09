package com.trevis.startup.example;

// import static org.junit.jupiter.api.Assertions.assertFalse;
// import static org.junit.jupiter.api.Assertions.assertEquals;
// import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.trevis.startup.example.dto.AuthToken;
import com.trevis.startup.example.dto.Login;
import com.trevis.startup.example.services.AuthService;

@SpringBootTest
public class AuthServiceTests {
    
    @Autowired
	AuthService authService;


	@Test
    void testLoginWithCorrectPassword() {
		Login correctLogin = new Login("yas1234", "Haha@123", true);
        AuthToken authToken = authService.login(correctLogin);

        assertNotNull(authToken, "Expected authentication token not null");
        assertNotNull(authToken.token(), "Expected non-null authentication token");
    }
}
