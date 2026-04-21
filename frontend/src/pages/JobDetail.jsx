import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { getJobById } from "../services/api";

export default function JobDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getJobById(id)
      .then((res) => {
        setJob(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching job:", err);
        setError(true);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="detail-loading">Loading job...</div>
      </>
    );
  }

  if (error || !job) {
    return (
      <>
        <Navbar />
        <div style={{ textAlign: "center", padding: "50px" }}>
          <h2>Job not found</h2>
          <button className="back-btn" onClick={() => navigate(-1)}>
            ← Back to Jobs
          </button>
        </div>
      </>
    );
  }

  // Calculate days ago
  let daysAgoText = "Recently";
  if (job.postedAt) {
    const postedDate = new Date(job.postedAt);
    const today = new Date();
    const diffTime = Math.abs(today - postedDate);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays > 0) {
      daysAgoText = `${diffDays} days ago`;
    }
  }

  return (
    <>
      <Navbar />
      <div className="detail-page">
        <div className="detail-left">
          <button className="back-btn" onClick={() => navigate(-1)}>
            ← Back to Jobs
          </button>
          <h1 className="detail-title">{job.title}</h1>
          <div className="detail-company">
            {job.company} • {job.location}
          </div>

          <div className="detail-pills">
            <span className="detail-pill">{job.type}</span>
            <span className="detail-pill">{job.category}</span>
            {job.salary && <span className="detail-pill">{job.salary}</span>}
          </div>

          <hr style={{ border: "0", borderTop: "1px solid #f0f0f0", margin: "24px 0" }} />

          <div className="detail-section">
            <h3>About the Role</h3>
            <p>{job.description}</p>
          </div>

          <div className="detail-section">
            <h3>Key Requirements</h3>
            <ul>
              <li>Bachelor's degree in a relevant field</li>
              <li>Strong communication and problem-solving skills</li>
              <li>Ability to work in a fast-paced environment</li>
              <li>Freshers and 0-2 years experience welcome</li>
            </ul>
          </div>

          <div className="detail-section">
            <h3>About {job.company}</h3>
            <p>
              {job.company} is a leading company in the {job.category} sector, committed to
              innovation and excellence.
            </p>
          </div>
        </div>

        <div className="detail-right">
          <div className="detail-right-card">
            <h3 style={{ marginBottom: "16px" }}>Apply for this Job</h3>
            <p style={{ fontSize: "13px", color: "var(--text-secondary)", marginBottom: "16px" }}>
              Posted: {daysAgoText}
            </p>
            <button
              className="btn-apply-now"
              onClick={() => navigate(`/jobs/${id}/apply`)}
            >
              Apply Now
            </button>
            <button
              className="btn-save-job"
              onClick={() => alert("Feature coming soon!")}
            >
              Save Job
            </button>

            <div className="overview-table">
              <div className="overview-row">
                <span className="overview-label">Location</span>
                <span className="overview-value">{job.location}</span>
              </div>
              <div className="overview-row">
                <span className="overview-label">Type</span>
                <span className="overview-value">{job.type}</span>
              </div>
              <div className="overview-row">
                <span className="overview-label">Category</span>
                <span className="overview-value">{job.category}</span>
              </div>
              {job.salary && (
                <div className="overview-row">
                  <span className="overview-label">Salary</span>
                  <span className="overview-value">{job.salary}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
