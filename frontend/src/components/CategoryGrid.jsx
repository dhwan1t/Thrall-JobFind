import React from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  { name: "IT & Software", icon: "💻", count: 8 },
  { name: "Marketing", icon: "📢", count: 3 },
  { name: "Design", icon: "🎨", count: 2 },
  { name: "Finance", icon: "💰", count: 2 },
  { name: "Engineering", icon: "⚙️", count: 2 },
  { name: "Sales", icon: "🤝", count: 2 },
  { name: "Management", icon: "📋", count: 1 },
  { name: "Operations", icon: "🔧", count: 1 },
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
              <div style={{ fontSize: "3rem", marginBottom: "10px" }}>
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
