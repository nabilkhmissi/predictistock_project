package com.project.users.controller;

import com.project.users.dto.ApiResponse;
import com.project.users.dto.ClientDto;
import com.project.users.services.ClientService;
import com.project.users.services.DashboardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RestController
@RequestMapping("/clients")
@CrossOrigin("*")
@RequiredArgsConstructor
public class ClientController {

    private final ClientService clientService;
    private final DashboardService dashboardService;

    @GetMapping("")
    public ApiResponse findAll(@RequestParam(required = false) String search) {
        return ApiResponse.builder()
                .timestamp(LocalDateTime.now())
                .code(HttpStatus.OK.value())
                .data(clientService.findAll(search))
                .message("clients retrieved successfully")
                .build();
    }

    @PutMapping("/{id}")
    public ApiResponse update(@PathVariable String id,
                              @RequestBody String name) {
        System.out.println(name);
        System.out.println(id);
        ClientDto update = clientService.updateClient(id, name);
        return ApiResponse.builder()
                .timestamp(LocalDateTime.now())
                .code(HttpStatus.OK.value())
                .data(update)
                .message("client updated successfully")
                .build();
    }

    @GetMapping("/{id}")
    public ApiResponse findById(@PathVariable String id) {
        return ApiResponse.builder()
                .timestamp(LocalDateTime.now())
                .code(HttpStatus.OK.value())
                .data(clientService.findById(id))
                .message("client retrieved successfully")
                .build();
    }

    @DeleteMapping("/{id}")
    public ApiResponse deleteClient(@PathVariable String id) {
        clientService.deleteClient(id);
        return ApiResponse.builder()
                .timestamp(LocalDateTime.now())
                .code(HttpStatus.OK.value())
                .message("client deleted successfully")
                .build();
    }

    @GetMapping("/dashboard/client/{id}")
    public ApiResponse getDashboard(@PathVariable String id) {
        return ApiResponse.builder()
                .timestamp(LocalDateTime.now())
                .code(HttpStatus.OK.value())
                .data(dashboardService.getDashboard(id))
                .message("dashboard retrieved successfully")
                .build();
    }
}
