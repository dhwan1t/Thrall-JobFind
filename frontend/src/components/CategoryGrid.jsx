import React from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  { name: "IT & Software", icon: "IT", count: 8 },
  { name: "Marketing", icon: "MK", count: 3 },
  { name: "Design", icon: "DS", count: 2 },
  { name: "Finance", icon: "FN", count: 2 },
  { name: "Engineering", icon: "EN", count: 2 },
  { name: "Sales", icon: "SL", count: 2 },
  { name: "Management", icon: "MG", count: 1 },
  { name: "Operations", icon: "OP", count: 1 },
];

const CategoryGrid = () => {
  const navigate = useNavigate();

  return (
    <section className="categories">
      <div className="container">
        <h2>Browse by Category</h2>
        <div className="category-grid">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="category-card"
              onClick={() =>
                navigate("/jobs", { state: { filterCategory: cat.name } })
              }
            >
              <div
                className="category-icon"
                style={{ fontSize: "3rem", marginBottom: "10px" }}
              >
                {cat.icon}
              </div>
              <h3>{cat.name}</h3>
              <p>{cat.count} jobs</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
