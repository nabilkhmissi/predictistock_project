package com.project.users.repository;

import com.project.users.models.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CompanyRepo extends JpaRepository<Company, String> {


    @Query("SELECT c FROM Company c where c.client.id = :clientId")
    List<Company> findByClientId(@Param("clientId") String clientId);


    @Query("SELECT count(*) FROM Company c where c.client.id = :clientId")
    int countCompaniesByClientId(@Param("clientId") String clientId);
}
