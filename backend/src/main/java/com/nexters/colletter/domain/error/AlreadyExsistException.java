package com.nexters.colletter.domain.error;

public class AlreadyExsistException extends RuntimeException {
    public AlreadyExsistException(String errorMessage) {
        super(errorMessage);
    }
}
