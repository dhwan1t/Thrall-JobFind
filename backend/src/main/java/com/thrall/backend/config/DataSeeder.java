package com.thrall.backend.config;

import com.thrall.backend.model.Job;
import com.thrall.backend.repository.JobRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.List;

@Component
public class DataSeeder implements CommandLineRunner {

    private final JobRepository jobRepository;

    public DataSeeder(JobRepository jobRepository) {
        this.jobRepository = jobRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        if (jobRepository.count() == 0) {
            List<Job> jobs = List.of(
                    new Job(null, "Frontend Developer Intern", "TechStart India", "Bangalore", "Internship", "IT & Software", "Work on React-based web apps", "₹15,000/month", LocalDateTime.now()),
                    new Job(null, "Java Backend Developer", "InfoSys", "Pune", "Full-time", "IT & Software", "Spring Boot microservices development", "₹6-10 LPA", LocalDateTime.now()),
                    new Job(null, "Digital Marketing Intern", "GrowthHive", "Remote", "Internship", "Marketing", "SEO, social media, and content marketing", "₹10,000/month", LocalDateTime.now()),
                    new Job(null, "UI/UX Designer", "DesignCo", "Mumbai", "Full-time", "Design", "Design mobile and web interfaces", "₹5-8 LPA", LocalDateTime.now()),
                    new Job(null, "Finance Analyst", "Deloitte", "Hyderabad", "Full-time", "Finance", "Financial modelling and reporting", "₹7-12 LPA", LocalDateTime.now()),
                    new Job(null, "Mechanical Engineer", "Tata Motors", "Chennai", "Full-time", "Engineering", "CAD design and product development", "₹4-7 LPA", LocalDateTime.now())
            );

            jobRepository.saveAll(jobs);
        }
    }
}
