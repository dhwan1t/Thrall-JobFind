package com.thrall.backend.repository;

import com.thrall.backend.model.Application;
import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ApplicationRepository
    extends MongoRepository<Application, String>
{
    List<Application> findByUserId(String userId);
    List<Application> findByJobId(String jobId);
    boolean existsByJobIdAndUserId(String jobId, String userId);
}
