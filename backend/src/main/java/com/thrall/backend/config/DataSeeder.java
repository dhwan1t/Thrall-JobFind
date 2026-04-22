package com.thrall.backend.config;

import com.thrall.backend.model.Job;
import com.thrall.backend.repository.JobRepository;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataSeeder implements CommandLineRunner {

    private final JobRepository jobRepository;

    public DataSeeder(JobRepository jobRepository) {
        this.jobRepository = jobRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        if (jobRepository.count() == 0) {
            System.out.println("Seeding database...");

            Job job1 = new Job();
            job1.setTitle("Frontend Developer Intern");
            job1.setCompany("TechStart India");
            job1.setLocation("Bangalore");
            job1.setType("Internship");
            job1.setCategory("IT & Software");
            job1.setDescription("Work on React-based web apps");
            job1.setSalary("₹15,000/month");
            job1.setPostedAt(LocalDateTime.now());

            Job job2 = new Job();
            job2.setTitle("Java Backend Developer");
            job2.setCompany("InfoSys");
            job2.setLocation("Pune");
            job2.setType("Full-time");
            job2.setCategory("IT & Software");
            job2.setDescription("Spring Boot microservices development");
            job2.setSalary("₹6-10 LPA");
            job2.setPostedAt(LocalDateTime.now());

            Job job3 = new Job();
            job3.setTitle("Digital Marketing Intern");
            job3.setCompany("GrowthHive");
            job3.setLocation("Remote");
            job3.setType("Internship");
            job3.setCategory("Marketing");
            job3.setDescription("SEO, social media, and content marketing");
            job3.setSalary("₹10,000/month");
            job3.setPostedAt(LocalDateTime.now());

            Job job4 = new Job();
            job4.setTitle("UI/UX Designer");
            job4.setCompany("DesignCo");
            job4.setLocation("Mumbai");
            job4.setType("Full-time");
            job4.setCategory("Design");
            job4.setDescription("Design mobile and web interfaces");
            job4.setSalary("₹5-8 LPA");
            job4.setPostedAt(LocalDateTime.now());

            Job job5 = new Job();
            job5.setTitle("Finance Analyst");
            job5.setCompany("Deloitte");
            job5.setLocation("Hyderabad");
            job5.setType("Full-time");
            job5.setCategory("Finance");
            job5.setDescription("Financial modelling and reporting");
            job5.setSalary("₹7-12 LPA");
            job5.setPostedAt(LocalDateTime.now());

            Job job6 = new Job();
            job6.setTitle("Mechanical Engineer");
            job6.setCompany("Tata Motors");
            job6.setLocation("Chennai");
            job6.setType("Full-time");
            job6.setCategory("Engineering");
            job6.setDescription("CAD design and product development");
            job6.setSalary("₹4-7 LPA");
            job6.setPostedAt(LocalDateTime.now());

            List<Job> jobs = Arrays.asList(job1, job2, job3, job4, job5, job6);

            jobRepository.saveAll(jobs);
        }
    }
}
