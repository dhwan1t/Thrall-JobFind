import React, { useEffect, useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import JobCard from "../components/JobCard";
import Navbar from "../components/Navbar";
import FilterSidebar from "../components/FilterSidebar";
import { getAllJobs, getMyApplications } from "../services/api";

const Jobs = () => {
  const location = useLocation();
  const searchResults = location.state?.jobs;
  const filterCategory = location.state?.filterCategory;

  const [jobs, setJobs] = useState(searchResults || []);
  const [loading, setLoading] = useState(!searchResults);
  const [sortOption, setSortOption] = useState("Relevance");
  const [filters, setFilters] = useState({
    types: [],
    categories: [],
    locations: [],
  });
  const [myApplications, setMyApplications] = useState([]);

  const handleFilterChange = (filterType, value, checked) => {
    if (filterType === "clear") {
      setFilters({ types: [], categories: [], locations: [] });
    } else {
      setFilters((prev) => ({
        ...prev,
        [filterType]: checked
          ? [...prev[filterType], value]
          : prev[filterType].filter((item) => item !== value),
      }));
    }
  };

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      if (filters.types.length > 0 && !filters.types.includes(job.type))
        return false;
      if (
        filters.categories.length > 0 &&
        !filters.categories.includes(job.category)
      )
        return false;
      if (
        filters.locations.length > 0 &&
        !filters.locations.includes(job.location)
      )
        return false;
      return true;
    });
  }, [jobs, filters]);

  useEffect(() => {
    if (filterCategory) {
      setFilters({ types: [], categories: [filterCategory], locations: [] });
    }

    if (searchResults) {
      setJobs(searchResults);
      setLoading(false);
    } else {
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
    }
  }, [searchResults, filterCategory]);

  useEffect(() => {
    const userStr = localStorage.getItem("user");
    if (userStr) {
      try {
        const user = JSON.parse(userStr);
        if (user && user.id) {
          getMyApplications(user.id)
            .then((res) => setMyApplications(res.data))
            .catch((err) => console.error("Error fetching applications:", err));
        }
      } catch (e) {
        console.error("Failed to parse user from localStorage", e);
      }
    }
  }, []);

  const appliedJobIds = new Set(myApplications.map((a) => a.jobId));

  return (
    <>
      <Navbar />
      <div className="jobs-page-layout">
        <FilterSidebar filters={filters} onFilterChange={handleFilterChange} />
        <div className="jobs-main">
          <div className="jobs-topbar">
            <div className="jobs-count">
              {loading
                ? "Loading jobs..."
                : `${filteredJobs.length} jobs found`}
            </div>
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
