package com.nexters.colletter.domain.error;

public class AlreadyExistException extends RuntimeException {
    public AlreadyExistException(String errorMessage) {
        super(errorMessage);
    }
}
