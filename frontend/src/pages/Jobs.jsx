import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import JobCard from "../components/JobCard";
import FilterSidebar from "../components/FilterSidebar";
import { getAllJobs, getMyApplications } from "../services/api";

const Jobs = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchResults = location.state?.jobs;

  const [jobs, setJobs] = useState(searchResults || []);
  const [loading, setLoading] = useState(!searchResults);
  const [sortOption, setSortOption] = useState("Relevance");
  const [filters, setFilters] = useState({
    types: [],
    categories: location.state?.filterCategory
      ? [location.state.filterCategory]
      : [],
    locations: [],
  });
  const [myApplications, setMyApplications] = useState([]);

  const handleFilterChange = (filterType, value, checked) => {
    if (filterType === "clear") {
      setFilters({ types: [], categories: [], locations: [] });
    } else {
      setFilters((prev) => {
        const list = prev[filterType];
        if (checked) {
          return { ...prev, [filterType]: [...list, value] };
        } else {
          return { ...prev, [filterType]: list.filter((v) => v !== value) };
        }
      });
    }
  };

  const filteredJobs = jobs.filter((job) => {
    const matchType =
      filters.types.length === 0 || filters.types.includes(job.type);
    const matchCategory =
      filters.categories.length === 0 ||
      filters.categories.includes(job.category);
    const matchLocation =
      filters.locations.length === 0 ||
      filters.locations.includes(job.location);
    return matchType && matchCategory && matchLocation;
  });

  useEffect(() => {
    if (searchResults) {
      Promise.resolve().then(() => {
        setJobs(searchResults);
        setLoading(false);
      });
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
  }, [searchResults]);

  useEffect(() => {
    const fetchApps = async () => {
      const userStr = localStorage.getItem("user");
      if (userStr) {
        try {
          const user = JSON.parse(userStr);
          const res = await getMyApplications(user.id);
          setMyApplications(res.data);
        } catch (err) {
          console.error("Failed to fetch applications:", err);
        }
      }
    };
    fetchApps();
  }, []);

  const appliedJobIds = new Set(myApplications.map((a) => a.jobId));

  return (
    <>
      <Navbar />

      <div className="jobs-page-layout">
        <FilterSidebar filters={filters} onFilterChange={handleFilterChange} />

        {/* Right Column for Jobs */}
        <div className="jobs-main">
          <div className="jobs-topbar">
            <span className="jobs-count">
              {loading
                ? "Searching jobs..."
                : `${filteredJobs.length} jobs found`}
            </span>
            <select
              className="sort-select"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="Relevance">Relevance</option>
              <option value="Date: Newest">Date: Newest</option>
              <option value="Salary: High to Low">Salary: High to Low</option>
            </select>
          </div>

          <div className="jobs-list">
            {loading ? (
              // Proper Skeleton loader
              <>
                <div className="skeleton-card"></div>
                <div className="skeleton-card"></div>
                <div className="skeleton-card"></div>
                <div className="skeleton-card"></div>
              </>
            ) : filteredJobs.length === 0 ? (
              <p>No jobs found. Try a different search.</p>
            ) : (
              filteredJobs.map((job) => (
                <JobCard
                  key={job.id}
                  job={job}
                  onClick={() => navigate(`/jobs/${job.id}`)}
                  applied={appliedJobIds.has(job.id)}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Jobs;
