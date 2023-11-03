package com.project.users.services;

import com.project.users.dto.NewSubscriptionTypeRequest;
import com.project.users.exceptions.EntityNotFoundException;
import com.project.users.models.SubscriptionType;
import com.project.users.repository.SubscriptionTypeRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class SubscriptionTypeService {
    private final SubscriptionTypeRepo subscriptionTypeRepo;

    public List<SubscriptionType> findAll(){
        return subscriptionTypeRepo.findAll();
    }

    public SubscriptionType save(NewSubscriptionTypeRequest request){
        SubscriptionType type = new SubscriptionType();
        type.setAmount(request.getAmount());
        type.setDuration(request.getDuration());
        //type.setAllowedCompanyNumbers(request.getAllowedCompanyNumbers());
        type.setAllowedArticleNumbers(request.getAllowedArticleNumbers());
        return subscriptionTypeRepo.save(type);
    }


    public SubscriptionType findById(String id){
        Optional<SubscriptionType> subscription = subscriptionTypeRepo.findById(id);
        if(!subscription.isPresent()){
            throw new EntityNotFoundException("Subscription with this id not found");
        }
        return subscription.get();
    }

    public void deleteById(String id){
        Optional<SubscriptionType> subscription = subscriptionTypeRepo.findById(id);
        if(!subscription.isPresent()){
            throw new EntityNotFoundException("Subscription with this id not found");
        }
        subscriptionTypeRepo.deleteById(id);
    }
}
