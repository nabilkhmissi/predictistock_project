package com.project.users.dto;

import com.project.users.models.Company;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
public class CompanyDto {
    private String id;
    private String name;
    private LocalDateTime creationDate;
    private boolean enabled;
    private ClientDto client;

    public static Company toEntity(CompanyDto companyDto){
        Company company = new Company();
        company.setId(companyDto.getId());
        company.setName(companyDto.getName());
        company.setEnabled(companyDto.isEnabled());
        company.setClient(ClientDto.toEntity(companyDto.getClient()));
        company.setCreationDate(companyDto.getCreationDate());
        return company;
    }

    public static CompanyDto fromEntity(Company company){
        return CompanyDto.builder()
                .client(ClientDto.fromEntity(company.getClient()))
                .id(company.getId())
                .name(company.getName())
                .enabled(company.isEnabled())
                .creationDate(company.getCreationDate())
                .build();
    }


}

