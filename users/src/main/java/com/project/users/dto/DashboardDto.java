package com.project.users.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
public class DashboardDto {
    private int companies;
    private int subscriptions;
    private int orders;
    private int customers;
    private int articles;
}
