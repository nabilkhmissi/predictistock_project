package com.project.users.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class NewSubscriptionTypeRequest {
    private float amount;
    private int duration;
    //private int allowedCompanyNumbers;
    private int allowedArticleNumbers;
}
