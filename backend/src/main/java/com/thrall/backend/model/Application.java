package com.thrall.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document(collection = "applications")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Application {
    @Id
    private String id;

    private String jobId;
    private String userId;
    private String applicantName;
    private String applicantEmail;
    private String phone;
    private String coverLetter;
    private String status = "Applied";
    private LocalDateTime appliedAt = LocalDateTime.now();
}
