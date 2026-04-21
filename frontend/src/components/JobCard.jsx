import React from "react";
import { useNavigate } from "react-router-dom";

const JobCard = ({ job }) => {
  const navigate = useNavigate();

  const truncateDescription = (desc) => {
    if (!desc) return "";
    return desc.length > 120 ? desc.substring(0, 120) + "..." : desc;
  };

  const companyInitial = job.company
    ? job.company.charAt(0).toUpperCase()
    : "C";
  const salaryDisplay = job.salary ? job.salary : "Salary not disclosed";

  const isFresher =
    job.salary &&
    (job.salary.toLowerCase().includes("month") ||
      (job.type && job.type.toLowerCase().includes("internship")));
  const experienceTag = isFresher ? "Fresher" : "1-3 yrs";

  let postedDateDisplay = "Recently";
  if (job.postedAt) {
    const postedDate = new Date(job.postedAt);
    const today = new Date();
    const diffTime = Math.abs(today - postedDate);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays === 0) {
      postedDateDisplay = "Today";
    } else if (diffDays === 1) {
      postedDateDisplay = "1 day ago";
    } else if (diffDays > 1) {
      postedDateDisplay = `${diffDays} days ago`;
    }
  }

  const handleNavigate = () => {
    navigate(`/jobs/${job.id}`);
  };

  return (
    <div className="job-card">
      <div className="job-card-header">
        <div className="company-logo">{companyInitial}</div>
        <div>
          <h3 className="job-title" onClick={handleNavigate}>
            {job.title}
          </h3>
          <p className="job-company">{job.company}</p>
        </div>
      </div>

      <div className="job-meta">
        <div className="meta-chip">
          📍 {job.location || "Location not specified"}
        </div>
        <div className="meta-chip">💼 {job.type || "Full-time"}</div>
        <div className="meta-chip">💰 {salaryDisplay}</div>
      </div>

      <div className="job-tags">
        {job.category && <span className="tag">{job.category}</span>}
        <span className="tag">{experienceTag}</span>
      </div>

      <p className="job-desc-preview">{truncateDescription(job.description)}</p>

      <div className="job-card-footer">
        <span className="posted-date">{postedDateDisplay}</span>
        <button className="btn-view-details" onClick={handleNavigate}>
          View Details
        </button>
      </div>
    </div>
  );
};

export default JobCard;
