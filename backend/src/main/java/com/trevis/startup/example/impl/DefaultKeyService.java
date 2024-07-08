package com.trevis.startup.example.impl;

import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.NoSuchAlgorithmException;
import java.security.interfaces.RSAPrivateKey;
import java.security.interfaces.RSAPublicKey;

import com.trevis.startup.example.services.AuthKeyService;

public class DefaultKeyService implements AuthKeyService{
    private KeyPair keyPairs;

    @Override
    public RSAPrivateKey getPrivateKey() {
        try
        {
            if (keyPairs == null)
                createKeyPair();
        }
        catch (Exception ex)
        {
            ex.printStackTrace();
            return null;
        }

        RSAPrivateKey privateKey = (RSAPrivateKey) keyPairs.getPrivate();
        return privateKey;
    }

    @Override
    public RSAPublicKey getPublicKey() {
        try
        {
            if (keyPairs == null)
                createKeyPair();
        }
        catch (Exception ex)
        {
            ex.printStackTrace();
            return null;
        }
        
        RSAPublicKey publicKey = (RSAPublicKey) keyPairs.getPublic();
        return publicKey;
    }

    public void createKeyPair() throws NoSuchAlgorithmException{
        KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance("RSA");
        keyPairGenerator.initialize(2048);
        keyPairs = keyPairGenerator.generateKeyPair();
    }
    
}