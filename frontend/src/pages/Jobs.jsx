import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import JobCard from "../components/JobCard";
import { getAllJobs } from "../services/api";

const Jobs = () => {
  const location = useLocation();
  const searchResults = location.state?.jobs;

  const [jobs, setJobs] = useState(searchResults || []);
  const [loading, setLoading] = useState(!searchResults);

  useEffect(() => {
    if (searchResults) {
      setJobs(searchResults);
      setLoading(false);
      return;
    }

    const fetchJobs = async () => {
      try {
        const response = await getAllJobs();
        setJobs(response.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return <p>Loading jobs...</p>;
  }

  if (jobs.length === 0) {
    return <p>No jobs found. Try a different search.</p>;
  }

  return (
    <div className="jobs-grid">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default Jobs;
