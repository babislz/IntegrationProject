package com.trevis.startup.example.dto;

public record Login(String login, String password, boolean sucess, String token) {

    public Login(String login, String password, boolean sucess) {
        this(login, password, sucess, null);
    }
}