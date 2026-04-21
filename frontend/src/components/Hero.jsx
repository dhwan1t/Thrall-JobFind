import React from 'react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Find Your Dream Job</h1>
          <p className="hero-description">
            Discover thousands of opportunities tailored for freshers and students. Start your career journey with the best companies in India.
          </p>
          <div className="hero-buttons">
            <a href="#search" className="btn btn-primary">Search Jobs</a>
            <a href="#internships" className="btn btn-secondary">Browse Internships</a>
          </div>
        </div>
      </div>
    </section>
  );
}
