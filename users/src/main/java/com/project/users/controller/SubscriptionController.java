package com.project.users.controller;

import com.project.users.dto.ApiResponse;
import com.project.users.dto.NewSubscriptionTypeRequest;
import com.project.users.models.SubscriptionType;
import com.project.users.repository.SubscriptionRepo;
import com.project.users.services.SubscriptionService;
import com.project.users.services.SubscriptionTypeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RestController
@RequestMapping("/subscription")
@RequiredArgsConstructor
@CrossOrigin("*")
public class SubscriptionController {

    private final SubscriptionService subscriptionService;


    @GetMapping("/company/{companyId}/history")
    public ApiResponse findSubscriptionsHistoryByCompanyId(@PathVariable String companyId){
        return ApiResponse.builder()
                .timestamp(LocalDateTime.now())
                .code(HttpStatus.OK.value())
                .data(subscriptionService.findSubscriptionsHistoryByCompanyId(companyId))
                .message("Subscriptions history retrieved successfully")
                .build();
    }

    @GetMapping("/company/{companyId}")
    public ApiResponse findActiveByCompanyId(@PathVariable String companyId){
        return ApiResponse.builder()
                .timestamp(LocalDateTime.now())
                .code(HttpStatus.OK.value())
                .data(subscriptionService.findAllActiveByCompanyId(companyId))
                .message("Subscriptions retrieved successfully")
                .build();
    }
   /* @PostMapping("")
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
    }*/
}
