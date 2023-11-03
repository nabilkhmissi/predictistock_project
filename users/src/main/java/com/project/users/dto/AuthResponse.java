package com.project.users.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
public class AuthResponse {
    private String id;
    private String name;
    private String email;
    private String role;
}
