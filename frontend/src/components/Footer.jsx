import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>About Thrall</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/jobs">Browse Jobs</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>For Job Seekers</h4>
            <ul>
              <li>
                <Link to="/jobs">Browse Jobs</Link>
              </li>
              <li>
                <Link to="/jobs">Browse Internships</Link>
              </li>
              <li>
                <Link to="/profile">My Applications</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>For Employers</h4>
            <ul>
              <li>
                <Link to="/post-job">Post a Job</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>(c) 2026 Thrall. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
