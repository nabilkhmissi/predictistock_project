package com.project.users.services;

import com.project.users.dto.CompanyDto;
import com.project.users.dto.CreateCompanyRequest;
import com.project.users.exceptions.EntityNotFoundException;
import com.project.users.models.Client;
import com.project.users.models.Company;
import com.project.users.models.Subscription;
import com.project.users.models.SubscriptionType;
import com.project.users.repository.ClientRepo;
import com.project.users.repository.CompanyRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CompanyService {
    private final CompanyRepo companyRepo;
    private final ClientRepo clientRepo;
    private final SubscriptionTypeService subscriptionTypeService;
    private final SubscriptionService subscriptionService;

    public CompanyDto findById(String id){
        Optional<Company> company = companyRepo.findById(id);
        if(!company.isPresent()){
            throw new EntityNotFoundException("company with this id not found");
        }
        return CompanyDto.fromEntity(company.get());
    }
    public void delete(String id){
        Optional<Company> company = companyRepo.findById(id);
        if(company.isPresent()){
            throw new EntityNotFoundException("company with this id not found");
        }
        companyRepo.deleteById((id));
    }


    public List<CompanyDto> findAll() {
        return companyRepo.findAll().stream().map(CompanyDto::fromEntity).toList();
    }

    public List<CompanyDto> findByClientId(String clientId) {
        return companyRepo.findByClientId(clientId).stream().map(CompanyDto::fromEntity).toList();
    }

    public CompanyDto createCompany(CreateCompanyRequest request) {
        Optional<Client> client = clientRepo.findById(request.getClientId());
        if(client.isEmpty()){
            throw new EntityNotFoundException("User with this id not found");
        }

        Company company = new Company();
        company.setCreationDate(LocalDateTime.now());
        company.setEnabled(true);
        company.setClient(client.get());
        company.setName(request.getName());
        Company saved_company = companyRepo.save(company);

        SubscriptionType subscriptionType = subscriptionTypeService.findById(request.getSubscriptionTypeId());

        Subscription subscription = new Subscription();
        subscription.setSubscriptionType(subscriptionType);
        subscription.setDate(LocalDateTime.now());
        subscription.setEndDate(subscription.generateExpirationDate());
        subscription.setCompany(saved_company);
        subscription.setActive(true);
        subscriptionService.createSubscription(subscription);
        return CompanyDto.fromEntity(saved_company);
    }
}
