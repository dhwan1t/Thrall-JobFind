import React from 'react';

const CategoryGrid = () => {
    return (
        <section className="categories">
            <div className="container">
                <h2>Browse by Category</h2>
                <div className="category-grid">
                    <div className="category-card">
                        <h3>IT & Software</h3>
                        <p>1,234 jobs available</p>
                    </div>

                    <div className="category-card">
                        <h3>Marketing</h3>
                        <p>856 jobs available</p>
                    </div>

                    <div className="category-card">
                        <h3>Design</h3>
                        <p>542 jobs available</p>
                    </div>

                    <div className="category-card">
                        <h3>Finance</h3>
                        <p>678 jobs available</p>
                    </div>

                    <div className="category-card">
                        <h3>Engineering</h3>
                        <p>1,045 jobs available</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CategoryGrid;
