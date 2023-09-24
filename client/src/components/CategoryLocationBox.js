// CategoryLocationBox.js
import React from "react";
import "./css/CategoryLocationBox.css";
import { locations } from "../pages/Utils";

const CategoryLocationBox = ({ onCategoryChange, onLocationChange }) => {
  const categories = [
    "AC Repair",
    "Laptop Repair",
    "Mobile Repair",
    "Fridge Repair",
    "Air Cooler Repair",
  ];

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
        <select
          id="category-select"
          className="category-select"
          onChange={handleCategoryChange}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CategoryLocationBox;
