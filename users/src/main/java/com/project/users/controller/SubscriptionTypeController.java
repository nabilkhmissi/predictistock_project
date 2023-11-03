package com.project.users.controller;

import com.project.users.dto.ApiResponse;
import com.project.users.dto.NewSubscriptionTypeRequest;
import com.project.users.models.SubscriptionType;
import com.project.users.services.SubscriptionTypeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RestController
@RequestMapping("/subscription-type")
@RequiredArgsConstructor
@CrossOrigin("*")
public class SubscriptionTypeController {

    private final SubscriptionTypeService subscriptionTypeService;


    @GetMapping("")
    public ApiResponse findAll(){
        return ApiResponse.builder()
                .timestamp(LocalDateTime.now())
                .code(HttpStatus.OK.value())
                .data(subscriptionTypeService.findAll())
                .message("Subscription types retrieved successfully")
                .build();
    }
    @PostMapping("")
    public ApiResponse createSubscriptionType(@RequestBody NewSubscriptionTypeRequest request){
        SubscriptionType type = subscriptionTypeService.save(request);
        return ApiResponse.builder()
                .timestamp(LocalDateTime.now())
                .status(HttpStatus.OK)
                .code(HttpStatus.OK.value())
                .data(type)
                .message("Subscription type created successfully")
                .build();
    }

    @GetMapping("/{id}")
    public ApiResponse findById(@PathVariable String id){
        return ApiResponse.builder()
                .timestamp(LocalDateTime.now())
                .code(HttpStatus.OK.value())
                .data(subscriptionTypeService.findById(id))
                .message("Subscription type retrieved successfully")
                .build();
    }

    @DeleteMapping ("/{id}")
    public ApiResponse deleteSubscritionType(@PathVariable String id){
        subscriptionTypeService.deleteById(id);
        return ApiResponse.builder()
                .timestamp(LocalDateTime.now())
                .code(HttpStatus.OK.value())
                .message("Subscription type deleted successfully")
                .build();
    }
}
