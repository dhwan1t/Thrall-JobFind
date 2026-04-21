package com.thrall.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "users")
public class User {

    @Id
    private String id;

    private String fullName;

    @Indexed(unique = true)
    private String email;

    // store as plain text for now (college project)
    private String password;

    // "JOB_SEEKER" or "EMPLOYER", default "JOB_SEEKER"
    private String role = "JOB_SEEKER";

    private LocalDateTime createdAt = LocalDateTime.now();
}
