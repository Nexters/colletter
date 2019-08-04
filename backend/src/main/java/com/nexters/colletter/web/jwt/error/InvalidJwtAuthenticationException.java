package com.nexters.colletter.web.jwt.error;

public class InvalidJwtAuthenticationException extends RuntimeException {
    public InvalidJwtAuthenticationException(String errorMessage) {
        super(errorMessage);
    }
}
