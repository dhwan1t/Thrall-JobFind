import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";

const PostJob = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    type: "Full-time",
    category: "IT & Software",
    salary: "",
    description: "",
  });
  const [message, setMessage] = useState({ text: "", type: "" });

  useEffect(() => {
    const storedUser = localStorage.getItem("jobquest_user");
    if (!storedUser) {
      alert("Please login to post a job");
      navigate("/login");
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ text: "", type: "" });
    try {
      const payload = {
        ...formData,
        postedByUserId: user.id,
        postedAt: new Date().toISOString(),
      };
      await api.post("/jobs", payload);
      setMessage({ text: "Job posted successfully!", type: "success" });
      setFormData({
        title: "",
        company: "",
        location: "",
        type: "Full-time",
        category: "IT & Software",
        salary: "",
        description: "",
      });
    } catch (error) {
      setMessage({
        text: "Error posting job. Please try again.",
        type: "error",
      });
    }
  };

  if (!user) return null;

  return (
    <div className="post-job-page">
      <h1>Post a New Job</h1>
      <p className="subtitle">Find the best talent for your company</p>

      {message.text && (
        <div
          style={{
            color: message.type === "success" ? "green" : "red",
            marginBottom: "20px",
          }}
        >
          {message.text}
          {message.type === "success" && (
            <span style={{ marginLeft: "10px" }}>
              <Link to="/jobs">View Jobs</Link>
            </span>
          )}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-section-title">Job Details</div>
        <input
          type="text"
          name="title"
          className="form-input"
          placeholder="Job Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="company"
          className="form-input"
          placeholder="Company Name"
          value={formData.company}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          className="form-input"
          placeholder="e.g. Bangalore, Remote"
          value={formData.location}
          onChange={handleChange}
          required
        />

        <div className="form-section-title">Categorization</div>
        <select
          name="type"
          className="form-input"
          value={formData.type}
          onChange={handleChange}
          required
        >
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Internship">Internship</option>
        </select>

        <select
          name="category"
          className="form-input"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="IT & Software">IT & Software</option>
          <option value="Marketing">Marketing</option>
          <option value="Design">Design</option>
          <option value="Finance">Finance</option>
          <option value="Engineering">Engineering</option>
          <option value="Sales">Sales</option>
          <option value="Management">Management</option>
          <option value="Human Resources">Human Resources</option>
          <option value="Operations">Operations</option>
        </select>

        <input
          type="text"
          name="salary"
          className="form-input"
          placeholder="e.g. 6-10 LPA or 15,000/month (Optional)"
          value={formData.salary}
          onChange={handleChange}
        />

        <div className="form-section-title">Description</div>
        <textarea
          name="description"
          className="form-input"
          rows="6"
          placeholder="Job Description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" className="btn-submit">
          Post Job
        </button>
      </form>
    </div>
  );
};

export default PostJob;
