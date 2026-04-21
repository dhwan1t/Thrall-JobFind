import React from "react";

const JobCard = ({ job }) => {
  const truncateDescription = (desc) => {
    if (!desc) return "";
    return desc.length > 100 ? desc.substring(0, 100) + "..." : desc;
  };

  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <div className="job-details">
        <p>
          <strong>Company:</strong> {job.company}
        </p>
        <p>
          <strong>Location:</strong> {job.location}
        </p>
        {job.type && (
          <p>
            <strong>Type:</strong>{" "}
            <span className="type-badge">{job.type}</span>
          </p>
        )}
        {job.salary && (
          <p>
            <strong>Salary:</strong> {job.salary}
          </p>
        )}
        {job.category && (
          <p>
            <strong>Category:</strong> {job.category}
          </p>
        )}
      </div>
      <p className="job-description">{truncateDescription(job.description)}</p>
    </div>
  );
};

export default JobCard;
