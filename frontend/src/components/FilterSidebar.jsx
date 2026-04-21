import React from 'react';

const jobTypes = ['Full-time', 'Part-time', 'Internship'];
const categories = [
    'IT & Software',
    'Marketing',
    'Design',
    'Finance',
    'Engineering',
    'Sales',
    'Management',
    'Human Resources',
    'Operations'
];
const locations = [
    'Bangalore',
    'Mumbai',
    'Delhi',
    'Hyderabad',
    'Pune',
    'Chennai',
    'Gurgaon',
    'Noida',
    'Remote'
];

function FilterSidebar({ filters, onFilterChange }) {
    return (
        <div className="filters-sidebar">
            <div className="filter-header">
                <h3>Filters</h3>
                <button
                    className="clear-filters"
                    onClick={() => onFilterChange('clear', null, null)}
                >
                    Clear All Filters
                </button>
            </div>

            <div className="filter-section">
                <div className="filter-section-title">Job Type</div>
                {jobTypes.map((type) => (
                    <label key={type} className="filter-option">
                        <input
                            type="checkbox"
                            checked={filters.types.includes(type)}
                            onChange={(e) => onFilterChange('types', type, e.target.checked)}
                        />
                        <span>{type}</span>
                    </label>
                ))}
            </div>

            <div className="filter-section">
                <div className="filter-section-title">Category</div>
                {categories.map((category) => (
                    <label key={category} className="filter-option">
                        <input
                            type="checkbox"
                            checked={filters.categories.includes(category)}
                            onChange={(e) => onFilterChange('categories', category, e.target.checked)}
                        />
                        <span>{category}</span>
                    </label>
                ))}
            </div>

            <div className="filter-section">
                <div className="filter-section-title">Location</div>
                {locations.map((location) => (
                    <label key={location} className="filter-option">
                        <input
                            type="checkbox"
                            checked={filters.locations.includes(location)}
                            onChange={(e) => onFilterChange('locations', location, e.target.checked)}
                        />
                        <span>{location}</span>
                    </label>
                ))}
            </div>
        </div>
    );
}

export default FilterSidebar;
