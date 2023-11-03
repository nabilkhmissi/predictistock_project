package com.project.users.models;

import jakarta.persistence.*;
import jdk.jfr.Timestamp;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Getter
@Setter
public class Company {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    private String name;
    @CreationTimestamp
    private LocalDateTime creationDate;
    private boolean enabled;
    @ManyToOne(cascade = CascadeType.ALL)
    private Client client;
}

