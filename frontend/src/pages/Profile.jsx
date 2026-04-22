import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { getMyApplications } from "../services/api";

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userStr = localStorage.getItem("jobquest_user");
    if (!userStr) {
      navigate("/login");
      return;
    }
    const userData = JSON.parse(userStr);
    Promise.resolve().then(() => {
      setUser(userData);
    });

    getMyApplications(userData.id)
      .then((res) => {
        setApplications(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch applications:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [navigate]);

  if (!user) return null;

  const initials = user.fullName
    ? user.fullName
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .substring(0, 2)
    : "U";

  const memberSince = user.createdAt
    ? new Date(user.createdAt).toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      })
    : "Recently joined";

  return (
    <>
      <Navbar />
      <div className="profile-page">
        <div className="profile-card">
          <div className="avatar">{initials}</div>
          <div className="profile-info">
            <h2>{user.fullName}</h2>
            <p>{user.email}</p>
            <p>Member since: {memberSince}</p>
          </div>
        </div>

        <h2>My Applications</h2>
        {loading ? (
          <p>Loading applications...</p>
        ) : applications.length === 0 ? (
          <p>
            You haven't applied to any jobs yet.{" "}
            <Link to="/jobs">Browse Jobs</Link>
          </p>
        ) : (
          <div className="applications-list">
            {applications.map((app) => (
              <div key={app.id} className="application-card">
                <div className="application-info">
                  <h4>
                    <Link to={`/jobs/${app.jobId}`}>Job ID: {app.jobId}</Link>
                  </h4>
                  <p>
                    Applied on{" "}
                    {new Date(app.appliedAt).toLocaleDateString("en-US", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                  <p>Phone: {app.phone}</p>
                  <p>
                    {app.coverLetter && app.coverLetter.length > 60
                      ? `${app.coverLetter.substring(0, 60)}...`
                      : app.coverLetter}
                  </p>
                </div>
                <div>
                  <span
                    className={`status-badge status-${(
                      app.status || "APPLIED"
                    ).toLowerCase()}`}
                  >
                    {app.status || "Applied"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
