package com.project.users.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
public class Subscription {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    private LocalDateTime date;
    private LocalDateTime endDate;
    private boolean active;
    @ManyToOne
    private SubscriptionType subscriptionType;

    @ManyToOne
    private Company company;

    public LocalDateTime generateExpirationDate(){
        LocalDateTime expirationDate = LocalDateTime.now().plusMonths(this.subscriptionType.getDuration());
        return expirationDate;
    }
}