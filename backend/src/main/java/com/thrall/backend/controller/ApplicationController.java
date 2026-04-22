package com.thrall.backend.controller;

import com.thrall.backend.model.Application;
import com.thrall.backend.repository.ApplicationRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/applications")
@CrossOrigin(origins = "http://localhost:5173")
public class ApplicationController {

    private final ApplicationRepository applicationRepository;

    @Autowired
    public ApplicationController(ApplicationRepository applicationRepository) {
        this.applicationRepository = applicationRepository;
    }

    @PostMapping
    public ResponseEntity<?> createApplication(
        @RequestBody Application application
    ) {
        if (
            applicationRepository.existsByJobIdAndUserId(
                application.getJobId(),
                application.getUserId()
            )
        ) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(
                "Already applied"
            );
        }
        Application savedApplication = applicationRepository.save(application);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedApplication);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Application>> getApplicationsByUser(
        @PathVariable String userId
    ) {
        List<Application> applications = applicationRepository.findByUserId(
            userId
        );
        return ResponseEntity.ok(applications);
    }

    @GetMapping("/job/{jobId}")
    public ResponseEntity<List<Application>> getApplicationsByJob(
        @PathVariable String jobId
    ) {
        List<Application> applications = applicationRepository.findByJobId(
            jobId
        );
        return ResponseEntity.ok(applications);
    }
}
