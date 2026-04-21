package com.thrall.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "jobs")
public class Job {

    @Id
    private String id;

    private String title;
    private String company;
    private String location;

    // "Full-time", "Part-time", "Internship"
    private String type;

    // e.g. "IT & Software", "Marketing"
    private String category;

    private String description;

    // optional, e.g. "₹5-8 LPA"
    private String salary;

    private LocalDateTime postedAt = LocalDateTime.now();
}
