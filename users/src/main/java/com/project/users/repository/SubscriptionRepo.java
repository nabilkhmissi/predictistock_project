package com.project.users.repository;

import com.project.users.models.Subscription;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface SubscriptionRepo extends JpaRepository<Subscription, String> {

    @Query("SELECT s FROM Subscription s WHERE s.company.id = :companyId AND s.active = true")
    List<Subscription> findAllActiveByCompanyId(@Param("companyId") String companyId);

    @Query("SELECT s FROM Subscription s WHERE s.company.id = :companyId")
    List<Subscription> findSubscriptionsHistoryByCompanyId(@Param("companyId") String companyId);


    /*@Query("SELECT s FROM Subscription s WHERE s.client.id = :clientId")
    List<Subscription> findByClientId(String clientId);*/

    @Query("SELECT count(*) FROM Subscription s where s.company.client.id = :clientId")
    int countSubscriptionsByClientId(@Param("clientId") String clientId);
}
