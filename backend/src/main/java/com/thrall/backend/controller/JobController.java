package com.thrall.backend.controller;

import com.thrall.backend.model.Job;
import com.thrall.backend.repository.JobRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/jobs")
@CrossOrigin(origins = "http://localhost:5173")
public class JobController {

    private final JobRepository jobRepository;

    public JobController(JobRepository jobRepository) {
        this.jobRepository = jobRepository;
    }

    @GetMapping
    public ResponseEntity<List<Job>> getAllJobs() {
        List<Job> jobs = jobRepository.findAll();
        return ResponseEntity.ok(jobs);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Job> getJobById(@PathVariable String id) {
        Optional<Job> job = jobRepository.findById(id);
        return job.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    @GetMapping("/search")
    public ResponseEntity<List<Job>> searchJobs(
            @RequestParam(required = false) String title,
            @RequestParam(required = false) String location) {

        List<Job> jobs;
        boolean hasTitle = (title != null && !title.trim().isEmpty());
        boolean hasLocation = (location != null && !location.trim().isEmpty());

        if (hasTitle && hasLocation) {
            jobs = jobRepository.findByTitleContainingIgnoreCaseAndLocationContainingIgnoreCase(title, location);
        } else if (hasTitle) {
            jobs = jobRepository.findByTitleContainingIgnoreCase(title);
        } else if (hasLocation) {
            jobs = jobRepository.findByLocationContainingIgnoreCase(location);
        } else {
            jobs = jobRepository.findAll();
        }

        return ResponseEntity.ok(jobs);
    }

    @GetMapping("/category/{category}")
    public ResponseEntity<List<Job>> getJobsByCategory(@PathVariable String category) {
        List<Job> jobs = jobRepository.findByCategory(category);
        return ResponseEntity.ok(jobs);
    }

    @PostMapping
    public ResponseEntity<Job> createJob(@RequestBody Job job) {
        Job savedJob = jobRepository.save(job);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedJob);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteJob(@PathVariable String id) {
        if (!jobRepository.existsById(id)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        jobRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
