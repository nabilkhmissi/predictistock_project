package com.project.users.dto;

import com.project.users.models.Subscription;
import com.project.users.models.SubscriptionType;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
public class SubscriptionDto {
    private String id;
    private LocalDateTime date;
    private LocalDateTime endDate;
    private SubscriptionType subscriptionType;
    private CompanyDto company;
    private boolean active;

    public static SubscriptionDto fromEntity(Subscription subscription){
        return SubscriptionDto.builder()
                .id(subscription.getId())
                .endDate(subscription.getEndDate())
                .date(subscription.getDate())
                .active(subscription.isActive())
                .subscriptionType(subscription.getSubscriptionType())
                .company(CompanyDto.fromEntity(subscription.getCompany()))
                .build();
    }
}
