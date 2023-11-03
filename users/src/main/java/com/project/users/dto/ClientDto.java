package com.project.users.dto;

import com.project.users.models.Client;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class ClientDto {
    private String id;
    private String name;
    private String email;
    private String role;

    public static Client toEntity(ClientDto clientDto){
        Client client = new Client();
        client.setId(clientDto.getId());
        client.setName(clientDto.getName());
        client.setRole(clientDto.getRole());
        client.setEmail(clientDto.getEmail());
        return client;
    }

    public static ClientDto fromEntity(Client client){
        return ClientDto.builder()
                .id(client.getId())
                .name(client.getName())
                .email(client.getEmail())
                .role(client.getRole())
                .build();
    }
}
