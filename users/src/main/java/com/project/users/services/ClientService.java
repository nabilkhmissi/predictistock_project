package com.project.users.services;

import com.project.users.dto.ClientDto;
import com.project.users.dto.CompanyDto;
import com.project.users.exceptions.EntityNotFoundException;
import com.project.users.models.Client;
import com.project.users.models.Company;
import com.project.users.repository.ClientRepo;
import com.project.users.repository.CompanyRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ClientService {
    private final ClientRepo clientRepo;
    private final CompanyRepo companyRepo;
    private SubscriptionTypeService subscriptionTypeService;

    public ClientDto findById(String id){
        Optional<Client> client = clientRepo.findById(id);
        if(!client.isPresent()){
            throw new EntityNotFoundException("client with this id not found");
        }
        return ClientDto.fromEntity(client.get()) ;
    }
    public void deleteClient(String id){
        Optional<Client> client = clientRepo.findById((id));
        if(client.isPresent()){
            throw new EntityNotFoundException("client with this id not found");
        }
        clientRepo.deleteById((id));
    }

    public List<ClientDto> findAll(String search) {
        if(search != null && !search.isEmpty()){
            return clientRepo.searchByName(search).stream().map(ClientDto::fromEntity).toList();
        }
        return clientRepo.findAll().stream().map(ClientDto::fromEntity).toList();
    }

    public CompanyDto createCompany(String clientId, String name){
        Optional<Client> client = clientRepo.findById(clientId);
        if(!client.isPresent()){
            throw new EntityNotFoundException("Client with this id not found");
        }
        Company newCompany = new Company();
        //newCompany.setId(UUID.randomUUID().toString());
        newCompany.setName(name);
        newCompany.setEnabled(false);
        newCompany.setClient(client.get());
        return CompanyDto.fromEntity(companyRepo.save(newCompany));
    }

   /* public CompanyCreationRequiredData getCompanyCreationRequiredData(String userId){
        int number = companyRepo.countCompaniesByClientId(userId);
        ClientDto client = this.findById(userId);
    }*/

    public ClientDto updateClient(String id, String name) {
        Client client = ClientDto.toEntity(this.findById(id));
        client.setId(id);
        client.setName(name);
        return ClientDto.fromEntity(clientRepo.save(client));

    }
}
