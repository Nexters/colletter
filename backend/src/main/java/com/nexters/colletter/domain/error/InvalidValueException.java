package com.nexters.colletter.domain.error;

import org.omg.CORBA.DynAnyPackage.Invalid;

public class InvalidValueException extends RuntimeException {
    public InvalidValueException(String errorMessage) {
        super(errorMessage);
    }
}
