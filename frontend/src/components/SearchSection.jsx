import React, { useState } from "react";

const SearchSection = ({ onSearch }) => {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(jobTitle, location);
  };

  return (
    <section className="search-section">
      <div className="container">
        <h2>Search for Jobs & Internships</h2>
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="job-title">Job Title or Keyword</label>
            <input
              type="text"
              id="job-title"
              name="job-title"
              placeholder="e.g. Web Developer, Marketing Intern"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="e.g. Mumbai, Bangalore, Remote"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-search">
            Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default SearchSection;
