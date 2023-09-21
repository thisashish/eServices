// CategoryLocationBox.js
import React from 'react';
import './css/CategoryLocationBox.css';

const CategoryLocationBox = ({ onCategoryChange, onLocationChange }) => {
  const categories = ['AC Repair', 'Laptop Repair', 'Mobile Repair', 'Fridge Repair', 'Air Cooler Repair'];
  const locations = ['Palia Kalan', 'Lakhimpur Kheri', 'Gola'];

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    onCategoryChange(selectedCategory);
  };

  const handleLocationChange = (event) => {
    const selectedLocation = event.target.value;
    onLocationChange(selectedLocation);
  };

  return (
    <div className="category-location-box">
      {/* Category box */}
      <div className="category-box">
        <label htmlFor="category-select">Category:</label>
        <select id="category-select" className="category-select" onChange={handleCategoryChange}>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Location box */}
      <div className="location-box">
        <label htmlFor="location-select">Location:</label>
        <select id="location-select" className="location-select" onChange={handleLocationChange}>
          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CategoryLocationBox;
