import React from "react";

const JobCard = ({ job, onClick, applied }) => {
  const truncateDescription = (desc) => {
    if (!desc) return "";
    return desc.length > 120 ? desc.substring(0, 120) + "..." : desc;
  };

  const getDaysAgo = (dateString) => {
    if (!dateString) return "Recently";
    const days = Math.floor(
      (new Date() - new Date(dateString)) / (1000 * 60 * 60 * 24),
    );
    if (days === 0) return "Today";
    if (days === 1) return "1 day ago";
    return `${days} days ago`;
  };

  const getExperience = () => {
    if (
      job.type?.toLowerCase() === "internship" ||
      job.salary?.toLowerCase().includes("month")
    ) {
      return "Fresher";
    }
    return "1-3 yrs";
  };

  const firstLetter = job.company ? job.company.charAt(0).toUpperCase() : "C";

  return (
    <div className="job-card" onClick={onClick}>
      <div className="job-card-header">
        <div className="company-logo">{firstLetter}</div>
        <div>
          <h3 className="job-title">{job.title}</h3>
          <p className="job-company">{job.company}</p>
        </div>
      </div>

      <div className="job-meta">
        <span className="meta-chip">{job.location || "N/A"}</span>
        <span className="meta-chip">{job.type || "Full-time"}</span>
        <span className="meta-chip">
          {job.salary || "Salary not disclosed"}
        </span>
      </div>

      <div className="job-tags">
        {job.category && <span className="tag">{job.category}</span>}
        <span className="tag">{getExperience()}</span>
      </div>

      <p className="job-desc-preview">{truncateDescription(job.description)}</p>

      <div className="job-card-footer">
        <span className="posted-date">{getDaysAgo(job.postedAt)}</span>
        {applied ? (
          <span className="applied-badge">Applied</span>
        ) : (
          <button className="btn-view-details">View Details</button>
        )}
      </div>
    </div>
  );
};

export default JobCard;
