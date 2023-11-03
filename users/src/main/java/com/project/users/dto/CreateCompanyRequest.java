package com.project.users.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CreateCompanyRequest {
    private String subscriptionTypeId;
    private String clientId;
    private String name;
}
