package com.project.users.repository;

import com.project.users.models.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ClientRepo extends JpaRepository<Client, String> {
    @Query("SELECT c FROM Client c WHERE c.email = :email")
    Client findByEmail(@Param("email") String email);

    @Query("SELECT c FROM Client c WHERE c.name LIKE :name%")
    List<Client> searchByName(@Param("name") String name);
}
