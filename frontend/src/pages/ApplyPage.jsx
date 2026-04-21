import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { getJobById, applyToJob } from "../services/api";

const ApplyPage = () => {
  const { id: jobId } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [job, setJob] = useState(null);
  const [phone, setPhone] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [status, setStatus] = useState("idle"); // idle, submitting, success, error
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const storedUserStr = localStorage.getItem("jobquest_user");
    if (!storedUserStr) {
      navigate("/login", { state: { message: "Please login to apply" } });
      return;
    }
    const parsedUser = JSON.parse(storedUserStr);
    setUser(parsedUser);

    getJobById(jobId)
      .then((res) => setJob(res.data))
      .catch((err) => console.error("Error fetching job details:", err));
  }, [jobId, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      await applyToJob({
        jobId,
        userId: user.id,
        applicantName: user.fullName,
        applicantEmail: user.email,
        phone,
        coverLetter,
      });
      setStatus("success");
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setErrorMessage("You have already applied for this job");
      } else {
        setErrorMessage("An error occurred while submitting your application.");
      }
      setStatus("error");
    }
  };

  if (!user) return null;

  return (
    <>
      <Navbar />
      <div className="apply-page">
        {status === "success" ? (
          <div className="success-box">
            <h3>Application submitted successfully! 🎉</h3>
            <Link to="/jobs">
              <button
                className="btn-apply-now"
                style={{ width: "auto", marginTop: "16px", padding: "10px 24px" }}
              >
                Back to Jobs
              </button>
            </Link>
          </div>
        ) : (
          <>
            <h1 className="apply-form-title">Apply for Job</h1>

            {job && (
              <div className="apply-job-info">
                <div className="apply-job-title">{job.title}</div>
                <div className="apply-job-company">
                  {job.company} {job.location && `• ${job.location}`}
                </div>
              </div>
            )}

            {errorMessage && (
              <div style={{ color: "red", marginBottom: "16px", fontWeight: "600" }}>
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", marginBottom: "6px", fontWeight: "600" }}>
                  Name
                </label>
                <input
                  type="text"
                  className="form-input form-input-readonly"
                  value={user.fullName}
                  readOnly
                />
              </div>

              <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", marginBottom: "6px", fontWeight: "600" }}>
                  Email
                </label>
                <input
                  type="email"
                  className="form-input form-input-readonly"
                  value={user.email}
                  readOnly
                />
              </div>

              <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", marginBottom: "6px", fontWeight: "600" }}>
                  Phone Number *
                </label>
                <input
                  type="text"
                  className="form-input"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              <div style={{ marginBottom: "24px" }}>
                <label style={{ display: "block", marginBottom: "6px", fontWeight: "600" }}>
                  Cover Letter
                </label>
                <textarea
                  className="form-input"
                  rows="4"
                  maxLength="500"
                  placeholder="Tell us why you're a great fit for this role..."
                  value={coverLetter}
                  onChange={(e) => setCoverLetter(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="btn-apply-now"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </>
        )}
      </div>
    </>
  );
};

export default ApplyPage;
