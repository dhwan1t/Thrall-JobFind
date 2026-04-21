package com.thrall.backend.repository;

import com.thrall.backend.model.Job;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JobRepository extends MongoRepository<Job, String> {
    List<Job> findByTitleContainingIgnoreCase(String title);
    List<Job> findByLocationContainingIgnoreCase(String location);
    List<Job> findByCategory(String category);
    List<Job> findByTitleContainingIgnoreCaseAndLocationContainingIgnoreCase(String title, String location);
}
