package com.project.users.services;

import com.project.users.dto.SubscriptionDto;
import com.project.users.models.Subscription;
import com.project.users.repository.SubscriptionRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SubscriptionService {
    private final SubscriptionRepo subscriptionRepo;

    public Subscription createSubscription(Subscription subscription){
        return subscriptionRepo.save(subscription);
    }

    public List<SubscriptionDto> findAllActiveByCompanyId(String companyId){
        return subscriptionRepo.findAllActiveByCompanyId(companyId)
                .stream().map(SubscriptionDto::fromEntity).toList();
    };

    public List<SubscriptionDto> findSubscriptionsHistoryByCompanyId(String companyId){
        return subscriptionRepo.findSubscriptionsHistoryByCompanyId(companyId)
                .stream().map(SubscriptionDto::fromEntity).toList();
    };
}
