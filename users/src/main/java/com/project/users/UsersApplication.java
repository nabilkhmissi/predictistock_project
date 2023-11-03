package com.project.users;

import com.project.users.models.Client;
import com.project.users.repository.ClientRepo;
import com.project.users.repository.CompanyRepo;
import com.project.users.repository.SubscriptionTypeRepo;
import com.project.users.services.AuthService;
import com.project.users.services.ClientService;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

import java.util.List;
import java.util.UUID;

@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
@RequiredArgsConstructor
public class UsersApplication {

	private final ClientRepo clientRepo;

	public static void main(String[] args) {
		SpringApplication.run(UsersApplication.class, args);
	}

	@PostConstruct
	public void init_db(){
		//create a client user
		Client client = new Client();
		client.setName("User");
		client.setEmail("user@mail.com");
		client.setPassword("user");
		client.setRole("USER");
		//create an admin user
		Client admin = new Client();
		admin.setName("Admin");
		admin.setEmail("admin@mail.com");
		admin.setPassword("admin");
		admin.setRole("ADMIN");
		//save all
		this.clientRepo.saveAll(List.of(client, admin));
	}

}
