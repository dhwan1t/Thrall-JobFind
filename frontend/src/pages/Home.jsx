import React from "react";
import { useNavigate } from "react-router-dom";
import { searchJobs } from "../services/api";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchSection from "../components/SearchSection";
import CategoryGrid from "../components/CategoryGrid";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();

  const handleSearch = async (jobTitle, location) => {
    try {
      const response = await searchJobs(jobTitle, location);
      navigate("/jobs", { state: { jobs: response.data } });
    } catch (error) {
      console.error("Error searching jobs:", error);
    }
  };

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SearchSection onSearch={handleSearch} />
        <CategoryGrid />
        <WhyChooseUs />
      </main>
      <Footer />
    </>
  );
};

export default Home;
