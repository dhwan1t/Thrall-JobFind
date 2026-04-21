import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const userStr = localStorage.getItem("jobquest_user");
  const user = userStr ? JSON.parse(userStr) : null;

  const handleLogout = () => {
    localStorage.removeItem("jobquest_user");
    window.location.reload();
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="logo">
            <h1>Thrall</h1>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/jobs">Browse Jobs</Link>
            </li>
            <li>
              <a href="#internships">Internships</a>
            </li>
            <li>
              <a href="#companies">Companies</a>
            </li>
            {user ? (
              <>
                <li>
                  <Link to="/post-job">Post a Job</Link>
                </li>
                <li>
                  <Link to="/profile">My Applications</Link>
                </li>
                <li>
                  <Link
                    to="/profile"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      color: "white",
                      textDecoration: "none",
                      fontWeight: "bold",
                    }}
                  >
                    <div
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        backgroundColor: "#40826D",
                        color: "white",
                        border: "1px solid white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "14px",
                      }}
                    >
                      {(user.fullName || user.name || "U")
                        .charAt(0)
                        .toUpperCase()}
                    </div>
                    {(user.fullName || user.name || "User").split(" ")[0]}
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="btn-login"
                    style={{
                      background: "transparent",
                      color: "white",
                      cursor: "pointer",
                      padding: "8px 16px",
                      borderRadius: "4px",
                    }}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login" className="btn-login">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="btn-register">
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
