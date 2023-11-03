package com.project.users.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
public class SignupRequest {
    private String email;
    private String name;
    private String password;
    private String confirmPassword;
}
