package com.project.users.services;

import com.project.users.dto.DashboardDto;
import com.project.users.repository.CompanyRepo;
import com.project.users.repository.SubscriptionRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class DashboardService {
    private final CompanyRepo companyRepo;
    private final SubscriptionRepo subscriptionRepo;

    public DashboardDto getDashboard(String clientId){
        int companies = companyRepo.countCompaniesByClientId(clientId);
        int subscriptions = subscriptionRepo.countSubscriptionsByClientId(clientId);
        int orders = 0;
        int customers = 0;
        int articles = 0;
        return DashboardDto.builder()
                .articles(articles)
                .orders(orders)
                .customers(customers)
                .subscriptions(subscriptions)
                .companies(companies)
                .build();
    }
}
