package com.thrall.backend.config;

import com.thrall.backend.model.Job;
import com.thrall.backend.repository.JobRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

@Component
public class DataSeeder implements CommandLineRunner {

    private final JobRepository jobRepository;

    public DataSeeder(JobRepository jobRepository) {
        this.jobRepository = jobRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        if (jobRepository.count() < 5) {
            jobRepository.deleteAll();

            List<Job> jobs = Arrays.asList(
                new Job(null, "React Developer", "Swiggy", "Bangalore", "Full-time", "IT & Software", "Build consumer-facing React applications for India's leading food delivery platform. Work with a high-scale engineering team.", "₹8-14 LPA", LocalDateTime.now().minusDays(1)),
                new Job(null, "Android Developer Intern", "Zomato", "Gurgaon", "Internship", "IT & Software", "Work on Zomato's Android app used by millions. Learn Jetpack Compose and modern Android development.", "₹20,000/month", LocalDateTime.now().minusDays(2)),
                new Job(null, "Data Analyst", "Flipkart", "Bangalore", "Full-time", "IT & Software", "Analyse customer behaviour and sales data to drive business decisions. SQL and Python required.", "₹6-10 LPA", LocalDateTime.now().minusDays(1)),
                new Job(null, "UI/UX Designer", "Meesho", "Remote", "Full-time", "Design", "Design intuitive interfaces for our social commerce platform. Figma expertise required.", "₹7-12 LPA", LocalDateTime.now().minusDays(3)),
                new Job(null, "Product Manager", "CRED", "Bangalore", "Full-time", "Management", "Own the product roadmap for CRED's rewards platform. 2+ years product experience preferred.", "₹18-28 LPA", LocalDateTime.now().minusDays(4)),
                new Job(null, "Backend Java Developer", "Infosys", "Pune", "Full-time", "IT & Software", "Develop Spring Boot microservices for enterprise clients. Experience with REST APIs required.", "₹6-10 LPA", LocalDateTime.now().minusDays(5)),
                new Job(null, "Digital Marketing Intern", "Nykaa", "Mumbai", "Internship", "Marketing", "Assist with SEO, paid campaigns, and influencer marketing for Nykaa's beauty platform.", "₹12,000/month", LocalDateTime.now().minusDays(2)),
                new Job(null, "Financial Analyst", "Deloitte", "Hyderabad", "Full-time", "Finance", "Provide financial advisory and modelling services to Fortune 500 clients.", "₹7-12 LPA", LocalDateTime.now().minusDays(6)),
                new Job(null, "Machine Learning Engineer", "Ola", "Bangalore", "Full-time", "IT & Software", "Build ML models for ride demand prediction and driver allocation. TensorFlow/PyTorch required.", "₹14-22 LPA", LocalDateTime.now().minusDays(1)),
                new Job(null, "Content Writer Intern", "Teachable", "Remote", "Internship", "Marketing", "Write educational blog content, course descriptions, and email newsletters.", "₹8,000/month", LocalDateTime.now().minusDays(3)),
                new Job(null, "DevOps Engineer", "PhonePe", "Bangalore", "Full-time", "IT & Software", "Manage CI/CD pipelines, Kubernetes clusters, and AWS infrastructure for a high-traffic fintech app.", "₹12-18 LPA", LocalDateTime.now().minusDays(2)),
                new Job(null, "HR Recruiter", "TCS", "Chennai", "Full-time", "Human Resources", "Handle end-to-end recruitment for technical roles. Campus hiring experience is a plus.", "₹4-6 LPA", LocalDateTime.now().minusDays(7)),
                new Job(null, "Graphic Designer", "Canva India", "Remote", "Full-time", "Design", "Create marketing assets, social media graphics, and product illustrations.", "₹5-8 LPA", LocalDateTime.now().minusDays(4)),
                new Job(null, "Mechanical Engineer", "Tata Motors", "Chennai", "Full-time", "Engineering", "CAD design, prototyping, and quality control for EV components.", "₹4-7 LPA", LocalDateTime.now().minusDays(8)),
                new Job(null, "Business Development Intern", "Razorpay", "Bangalore", "Internship", "Sales", "Identify and onboard new merchant partners. Learn B2B sales at a top fintech startup.", "₹18,000/month", LocalDateTime.now().minusDays(1)),
                new Job(null, "QA Engineer", "Wipro", "Hyderabad", "Full-time", "IT & Software", "Manual and automation testing of web and mobile applications using Selenium and JIRA.", "₹4-7 LPA", LocalDateTime.now().minusDays(5)),
                new Job(null, "Cloud Solutions Architect", "Amazon India", "Hyderabad", "Full-time", "IT & Software", "Design and implement AWS cloud solutions for enterprise customers. AWS certification required.", "₹20-35 LPA", LocalDateTime.now().minusDays(2)),
                new Job(null, "Sales Executive", "Urban Company", "Delhi", "Full-time", "Sales", "Drive B2C sales for home services. Must have excellent communication skills.", "₹3-5 LPA + incentives", LocalDateTime.now().minusDays(9)),
                new Job(null, "Social Media Manager", "boAt", "Delhi", "Full-time", "Marketing", "Manage boAt's Instagram, YouTube, and Twitter. Create viral content strategies.", "₹5-8 LPA", LocalDateTime.now().minusDays(3)),
                new Job(null, "Python Developer", "Freshworks", "Chennai", "Full-time", "IT & Software", "Build backend services and integrations for our CRM platform using Python/Django.", "₹7-12 LPA", LocalDateTime.now().minusDays(4)),
                new Job(null, "Finance Intern", "Goldman Sachs", "Bangalore", "Internship", "Finance", "Support the investment banking team with financial modelling, research, and presentations.", "₹30,000/month", LocalDateTime.now().minusDays(6)),
                new Job(null, "Civil Engineer", "L&T", "Mumbai", "Full-time", "Engineering", "Site supervision and project management for large infrastructure projects.", "₹5-9 LPA", LocalDateTime.now().minusDays(10)),
                new Job(null, "iOS Developer", "Paytm", "Noida", "Full-time", "IT & Software", "Build and maintain Paytm's iOS app in Swift. Experience with payment flows is a plus.", "₹10-16 LPA", LocalDateTime.now().minusDays(3)),
                new Job(null, "Customer Support Executive", "Byju's", "Bangalore", "Full-time", "Operations", "Handle student and parent queries via phone and chat. Empathy and problem-solving required.", "₹3-4 LPA", LocalDateTime.now().minusDays(5)),
                new Job(null, "Frontend Developer Intern", "TechStart India", "Bangalore", "Internship", "IT & Software", "Work on React-based web apps. Learn Tailwind CSS, REST API integration, and Git workflow.", "₹15,000/month", LocalDateTime.now().minusDays(1))
            );

            jobRepository.saveAll(jobs);
        }
    }
}
