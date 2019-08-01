package com.nexters.colletter.domain.error;

public class InvalidValueException extends RuntimeException {
    public InvalidValueException(String errorMessage) {
        super(errorMessage);
    }
}
