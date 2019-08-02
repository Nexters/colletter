package com.nexters.colletter.web;

import com.nexters.colletter.domain.error.AlreadyExistException;
import com.nexters.colletter.domain.error.InvalidValueException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ExceptionController {

    @ExceptionHandler(AlreadyExistException.class)
    public ResponseEntity<String> alreadyExistExceptionHandler(AlreadyExistException ex) {
        return new ResponseEntity<>(ex.toString(), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(InvalidValueException.class)
    public ResponseEntity<String> invalidValueExceptionHandler (InvalidValueException ex) {
        return new ResponseEntity<>(ex.toString(), HttpStatus.BAD_REQUEST);
    }

    // TODO : remove
    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<String> runtimeExceptionHandler (InvalidValueException ex) {
        return new ResponseEntity<>(ex.toString(), HttpStatus.BAD_REQUEST);
    }
}
