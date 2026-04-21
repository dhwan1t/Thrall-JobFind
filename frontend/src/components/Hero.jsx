import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllJobs } from "../services/api";

export default function Hero() {
  const [jobCount, setJobCount] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const jobs = await getAllJobs();
        setJobCount(jobs.length);
      } catch (error) {
        console.error("Failed to fetch job count:", error);
      }
    };
    fetchJobs();
  }, []);

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Find Your Dream Job</h1>
          <p className="hero-description">
            Join {jobCount || "25,000+"} job seekers already using Thrall to
            land their dream role
          </p>
          <div className="hero-stats">
            <span className="hero-stat">25+ Live Jobs</span>
            <span className="hero-stat">10+ Companies</span>
            <span className="hero-stat">Free for Job Seekers</span>
          </div>
          <div className="hero-buttons">
            <a href="#search" className="btn btn-primary">
              Search Jobs
            </a>
            <Link
              to="/jobs"
              state={{ filterCategory: "IT & Software" }}
              className="btn btn-secondary"
            >
              Browse IT Jobs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
