package com.project.users.controller;

import com.project.users.dto.ApiResponse;
import com.project.users.dto.AuthRequest;
import com.project.users.dto.SignupRequest;
import com.project.users.services.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@CrossOrigin("*")
public class AuthController {

    private final AuthService authService;

    @PostMapping("/login")
    public ApiResponse login(@RequestBody AuthRequest request){
        return ApiResponse.builder()
                .timestamp(LocalDateTime.now())
                .status(HttpStatus.OK)
                .code(HttpStatus.OK.value())
                .data(authService.login(request))
                .message("logged in successfully")
                .build();
    }

    @PostMapping("/signup")
    public ApiResponse signup(@RequestBody SignupRequest request){
        return ApiResponse.builder()
                .timestamp(LocalDateTime.now())
                .status(HttpStatus.OK)
                .code(HttpStatus.OK.value())
                .data(authService.signup(request))
                .message("account created successfully")
                .build();
    }
}
