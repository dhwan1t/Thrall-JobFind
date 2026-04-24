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
        if (jobRepository.count() < 25) {
            System.out.println("Seeding database with 25 jobs...");

            Job job1 = new Job();
            job1.setTitle("React Developer");
            job1.setCompany("Swiggy");
            job1.setLocation("Bangalore");
            job1.setType("Full-time");
            job1.setCategory("IT & Software");
            job1.setDescription(
                "Build consumer-facing React applications for India's leading food delivery platform."
            );
            job1.setSalary("8-14 LPA");
            job1.setPostedAt(LocalDateTime.now().minusDays(1));

            Job job2 = new Job();
            job2.setTitle("Android Developer Intern");
            job2.setCompany("Zomato");
            job2.setLocation("Gurgaon");
            job2.setType("Internship");
            job2.setCategory("IT & Software");
            job2.setDescription(
                "Work on Zomato's Android app used by millions."
            );
            job2.setSalary("20,000/month");
            job2.setPostedAt(LocalDateTime.now().minusDays(2));

            Job job3 = new Job();
            job3.setTitle("Data Analyst");
            job3.setCompany("Flipkart");
            job3.setLocation("Bangalore");
            job3.setType("Full-time");
            job3.setCategory("IT & Software");
            job3.setDescription("Analyse customer behaviour and sales data.");
            job3.setSalary("6-10 LPA");
            job3.setPostedAt(LocalDateTime.now().minusDays(1));

            Job job4 = new Job();
            job4.setTitle("UI/UX Designer");
            job4.setCompany("Meesho");
            job4.setLocation("Remote");
            job4.setType("Full-time");
            job4.setCategory("Design");
            job4.setDescription(
                "Design intuitive interfaces for our social commerce platform."
            );
            job4.setSalary("7-12 LPA");
            job4.setPostedAt(LocalDateTime.now().minusDays(3));

            Job job5 = new Job();
            job5.setTitle("Product Manager");
            job5.setCompany("CRED");
            job5.setLocation("Bangalore");
            job5.setType("Full-time");
            job5.setCategory("Management");
            job5.setDescription(
                "Own the product roadmap for CRED's rewards platform."
            );
            job5.setSalary("18-28 LPA");
            job5.setPostedAt(LocalDateTime.now().minusDays(4));

            Job job6 = new Job();
            job6.setTitle("Backend Java Developer");
            job6.setCompany("Infosys");
            job6.setLocation("Pune");
            job6.setType("Full-time");
            job6.setCategory("IT & Software");
            job6.setDescription(
                "Develop Spring Boot microservices for enterprise clients."
            );
            job6.setSalary("6-10 LPA");
            job6.setPostedAt(LocalDateTime.now().minusDays(5));

            Job job7 = new Job();
            job7.setTitle("Digital Marketing Intern");
            job7.setCompany("Nykaa");
            job7.setLocation("Mumbai");
            job7.setType("Internship");
            job7.setCategory("Marketing");
            job7.setDescription("Assist with SEO and paid campaigns.");
            job7.setSalary("12,000/month");
            job7.setPostedAt(LocalDateTime.now().minusDays(2));

            Job job8 = new Job();
            job8.setTitle("Financial Analyst");
            job8.setCompany("Deloitte");
            job8.setLocation("Hyderabad");
            job8.setType("Full-time");
            job8.setCategory("Finance");
            job8.setDescription(
                "Provide financial advisory to Fortune 500 clients."
            );
            job8.setSalary("7-12 LPA");
            job8.setPostedAt(LocalDateTime.now().minusDays(6));

            Job job9 = new Job();
            job9.setTitle("Machine Learning Engineer");
            job9.setCompany("Ola");
            job9.setLocation("Bangalore");
            job9.setType("Full-time");
            job9.setCategory("IT & Software");
            job9.setDescription("Build ML models for ride demand prediction.");
            job9.setSalary("14-22 LPA");
            job9.setPostedAt(LocalDateTime.now().minusDays(1));

            Job job10 = new Job();
            job10.setTitle("Content Writer Intern");
            job10.setCompany("Teachable");
            job10.setLocation("Remote");
            job10.setType("Internship");
            job10.setCategory("Marketing");
            job10.setDescription("Write educational blog content.");
            job10.setSalary("8,000/month");
            job10.setPostedAt(LocalDateTime.now().minusDays(3));

            Job job11 = new Job();
            job11.setTitle("DevOps Engineer");
            job11.setCompany("PhonePe");
            job11.setLocation("Bangalore");
            job11.setType("Full-time");
            job11.setCategory("IT & Software");
            job11.setDescription(
                "Manage CI/CD pipelines and AWS infrastructure."
            );
            job11.setSalary("12-18 LPA");
            job11.setPostedAt(LocalDateTime.now().minusDays(2));

            Job job12 = new Job();
            job12.setTitle("HR Recruiter");
            job12.setCompany("TCS");
            job12.setLocation("Chennai");
            job12.setType("Full-time");
            job12.setCategory("Human Resources");
            job12.setDescription("Handle end-to-end recruitment.");
            job12.setSalary("4-6 LPA");
            job12.setPostedAt(LocalDateTime.now().minusDays(7));

            Job job13 = new Job();
            job13.setTitle("Graphic Designer");
            job13.setCompany("Canva India");
            job13.setLocation("Remote");
            job13.setType("Full-time");
            job13.setCategory("Design");
            job13.setDescription(
                "Create marketing assets and social media graphics."
            );
            job13.setSalary("5-8 LPA");
            job13.setPostedAt(LocalDateTime.now().minusDays(4));

            Job job14 = new Job();
            job14.setTitle("Mechanical Engineer");
            job14.setCompany("Tata Motors");
            job14.setLocation("Chennai");
            job14.setType("Full-time");
            job14.setCategory("Engineering");
            job14.setDescription(
                "CAD design and prototyping for EV components."
            );
            job14.setSalary("4-7 LPA");
            job14.setPostedAt(LocalDateTime.now().minusDays(8));

            Job job15 = new Job();
            job15.setTitle("Business Development Intern");
            job15.setCompany("Razorpay");
            job15.setLocation("Bangalore");
            job15.setType("Internship");
            job15.setCategory("Sales");
            job15.setDescription("Identify and onboard new merchant partners.");
            job15.setSalary("18,000/month");
            job15.setPostedAt(LocalDateTime.now().minusDays(1));

            Job job16 = new Job();
            job16.setTitle("QA Engineer");
            job16.setCompany("Wipro");
            job16.setLocation("Hyderabad");
            job16.setType("Full-time");
            job16.setCategory("IT & Software");
            job16.setDescription("Manual and automation testing.");
            job16.setSalary("4-7 LPA");
            job16.setPostedAt(LocalDateTime.now().minusDays(5));

            Job job17 = new Job();
            job17.setTitle("Cloud Solutions Architect");
            job17.setCompany("Amazon India");
            job17.setLocation("Hyderabad");
            job17.setType("Full-time");
            job17.setCategory("IT & Software");
            job17.setDescription("Design and implement AWS cloud solutions.");
            job17.setSalary("20-35 LPA");
            job17.setPostedAt(LocalDateTime.now().minusDays(2));

            Job job18 = new Job();
            job18.setTitle("Sales Executive");
            job18.setCompany("Urban Company");
            job18.setLocation("Delhi");
            job18.setType("Full-time");
            job18.setCategory("Sales");
            job18.setDescription("Drive B2C sales for home services.");
            job18.setSalary("3-5 LPA + incentives");
            job18.setPostedAt(LocalDateTime.now().minusDays(9));

            Job job19 = new Job();
            job19.setTitle("Social Media Manager");
            job19.setCompany("boAt");
            job19.setLocation("Delhi");
            job19.setType("Full-time");
            job19.setCategory("Marketing");
            job19.setDescription("Manage Instagram, YouTube, and Twitter.");
            job19.setSalary("5-8 LPA");
            job19.setPostedAt(LocalDateTime.now().minusDays(3));

            Job job20 = new Job();
            job20.setTitle("Python Developer");
            job20.setCompany("Freshworks");
            job20.setLocation("Chennai");
            job20.setType("Full-time");
            job20.setCategory("IT & Software");
            job20.setDescription("Build backend services using Python/Django.");
            job20.setSalary("7-12 LPA");
            job20.setPostedAt(LocalDateTime.now().minusDays(4));

            Job job21 = new Job();
            job21.setTitle("Finance Intern");
            job21.setCompany("Goldman Sachs");
            job21.setLocation("Bangalore");
            job21.setType("Internship");
            job21.setCategory("Finance");
            job21.setDescription("Support investment banking team.");
            job21.setSalary("30,000/month");
            job21.setPostedAt(LocalDateTime.now().minusDays(6));

            Job job22 = new Job();
            job22.setTitle("Civil Engineer");
            job22.setCompany("L&T");
            job22.setLocation("Mumbai");
            job22.setType("Full-time");
            job22.setCategory("Engineering");
            job22.setDescription(
                "Site supervision for infrastructure projects."
            );
            job22.setSalary("5-9 LPA");
            job22.setPostedAt(LocalDateTime.now().minusDays(10));

            Job job23 = new Job();
            job23.setTitle("iOS Developer");
            job23.setCompany("Paytm");
            job23.setLocation("Noida");
            job23.setType("Full-time");
            job23.setCategory("IT & Software");
            job23.setDescription("Build and maintain Paytm's iOS app.");
            job23.setSalary("10-16 LPA");
            job23.setPostedAt(LocalDateTime.now().minusDays(3));

            Job job24 = new Job();
            job24.setTitle("Customer Support Executive");
            job24.setCompany("Byju's");
            job24.setLocation("Bangalore");
            job24.setType("Full-time");
            job24.setCategory("Operations");
            job24.setDescription("Handle student and parent queries.");
            job24.setSalary("3-4 LPA");
            job24.setPostedAt(LocalDateTime.now().minusDays(5));

            Job job25 = new Job();
            job25.setTitle("Frontend Developer Intern");
            job25.setCompany("TechStart India");
            job25.setLocation("Bangalore");
            job25.setType("Internship");
            job25.setCategory("IT & Software");
            job25.setDescription("Work on React-based web apps.");
            job25.setSalary("15,000/month");
            job25.setPostedAt(LocalDateTime.now().minusDays(1));

            List<Job> jobs = Arrays.asList(
                job1,
                job2,
                job3,
                job4,
                job5,
                job6,
                job7,
                job8,
                job9,
                job10,
                job11,
                job12,
                job13,
                job14,
                job15,
                job16,
                job17,
                job18,
                job19,
                job20,
                job21,
                job22,
                job23,
                job24,
                job25
            );

            jobRepository.saveAll(jobs);
            System.out.println("Database seeded with 25 jobs!");
        }
    }
}
