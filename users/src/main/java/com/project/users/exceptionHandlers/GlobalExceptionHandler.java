package com.project.users.exceptionHandlers;

import com.project.users.exceptions.EntityNotFoundException;
import com.project.users.exceptions.InvalidEntityException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.time.LocalDate;
@RestControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(InvalidEntityException.class)
    public ResponseEntity<ErrorResponse> handleException(InvalidEntityException exception, WebRequest webRequest){
        final ErrorResponse response = ErrorResponse.builder()
                .timestamp(LocalDate.now())
                .statusCode(HttpStatus.BAD_REQUEST.value())
                .message(exception.getMessage())
                .errors(exception.getErrors())
                .build();
        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(EntityNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleException(EntityNotFoundException exception, WebRequest webRequest){
        final ErrorResponse response = ErrorResponse.builder()
                .timestamp(LocalDate.now())
                .statusCode(HttpStatus.BAD_REQUEST.value())
                .message(exception.getMessage())
                .build();
        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
    }
}
