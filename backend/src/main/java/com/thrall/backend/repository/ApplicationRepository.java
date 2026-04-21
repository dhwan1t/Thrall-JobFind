package com.thrall.backend.repository;

import com.thrall.backend.model.Application;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ApplicationRepository extends MongoRepository<Application, String> {
    List<Application> findByUserId(String userId);
    List<Application> findByJobId(String jobId);
    boolean existsByJobIdAndUserId(String jobId, String userId);
}
