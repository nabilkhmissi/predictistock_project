package com.project.users.controller;

import com.project.users.dto.ApiResponse;
import com.project.users.dto.CompanyDto;
import com.project.users.dto.CreateCompanyRequest;
import com.project.users.services.CompanyService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RestController
@RequestMapping("/company")
@RequiredArgsConstructor
@CrossOrigin("*")
public class CompanyController {

    private final CompanyService companyService;


    @GetMapping("")
    public ApiResponse findAll(){
        return ApiResponse.builder()
                .timestamp(LocalDateTime.now())
                .code(HttpStatus.OK.value())
                .data(companyService.findAll())
                .message("companies retrieved successfully")
                .build();
    }

    @PostMapping("")
    public ApiResponse createCompany(@RequestBody CreateCompanyRequest request){
        return ApiResponse.builder()
                .timestamp(LocalDateTime.now())
                .code(HttpStatus.OK.value())
                .data(companyService.createCompany(request))
                .message("company created successfully")
                .build();
    }

    @GetMapping("/{id}")
    public ApiResponse findById(@PathVariable String id){
        return ApiResponse.builder()
                .timestamp(LocalDateTime.now())
                .code(HttpStatus.OK.value())
                .data(companyService.findById((id)))
                .message("company retrieved successfully")
                .build();
    }

    @GetMapping("/client/{clientId}")
    public ApiResponse findByClientId(@PathVariable String clientId){
        return ApiResponse.builder()
                .timestamp(LocalDateTime.now())
                .code(HttpStatus.OK.value())
                .data(companyService.findByClientId(clientId))
                .message("companies retrieved successfully")
                .build();
    }


    @DeleteMapping ("/{id}")
    public ApiResponse deleteCompany(@PathVariable String id){
        companyService.delete(id);
        return ApiResponse.builder()
                .timestamp(LocalDateTime.now())
                .code(HttpStatus.OK.value())
                .message("company deleted successfully")
                .build();
    }
}
