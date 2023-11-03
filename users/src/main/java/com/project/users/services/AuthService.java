package com.project.users.services;

import com.project.users.enums.roles;
import com.project.users.exceptions.EntityNotFoundException;
import com.project.users.exceptions.InvalidEntityException;
import com.project.users.dto.AuthRequest;
import com.project.users.dto.AuthResponse;
import com.project.users.models.Client;
import com.project.users.dto.SignupRequest;
import com.project.users.repository.ClientRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final ClientRepo clientRepo;
    public AuthResponse login(AuthRequest request) {
        Client client = clientRepo.findByEmail((request.getEmail()));
        if (client == null) {
            throw new EntityNotFoundException("User with this email not found");
        }
        if (!client.getPassword().matches(request.getPassword())) {
            throw new EntityNotFoundException("Invalid email/password");
        }
        return AuthResponse.builder()
                .id(client.getId())
                .email(client.getEmail())
                .name(client.getName())
                .role(client.getRole())
                .build();
    }

    public String signup(SignupRequest request) {
        Client client = clientRepo.findByEmail((request.getEmail()));
        if (client != null) {
            throw new InvalidEntityException("User with this email already exists");
        }
        if(!request.getPassword().matches(request.getConfirmPassword())) {
            throw new InvalidEntityException("Password does not match");
        }

        Client c = new Client();
        //c.setId(UUID.randomUUID().toString());
        c.setName(request.getName());
        c.setEmail(request.getEmail());
        c.setRole(roles.ROLE_USER.name());
        c.setPassword(request.getPassword());
        clientRepo.save(c);
        return "account created successfully";
    }


}
