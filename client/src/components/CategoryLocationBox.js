// CategoryLocationBox.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/CategoryLocationBox.css';

import React from "react";
import "./css/CategoryLocationBox.css";
import { locations } from "../pages/Utils";



const CategoryLocationBox = ({ onCategoryChange, onLocationChange }) => {

  const categories = ['AC Repair', 'Laptop Repair', 'Mobile Repair', 'Fridge Repair', 'Air Cooler Repair'];
  const locations = ['Palia Kalan', 'Lakhimpur Kheri', 'Gola','Bhira'];

  const history = useNavigate();

  


  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    onCategoryChange(selectedCategory);
    updateURL();
  };

  const handleLocationChange = (event) => {
    const selectedLocation = event.target.value;
    onLocationChange(selectedLocation);
    updateURL();
  };

  const updateURL = () => {
    const selectedLocation = document.getElementById('location-select').value;
    const selectedCategory = document.getElementById('category-select').value;
    const url = `/${selectedLocation.toLowerCase()}${selectedCategory ? `/${selectedCategory.toLowerCase()}` : ''}`;
    history.push(url);
  };

  return (
    <div className="category-location-box">
      {/* Category box */}
      <div className="category-box">
        <label htmlFor="category-select">Category:</label>

        <select id="category-select" className="category-select" onChange={handleCategoryChange}>
        <option value="">Select a category</option>

      
          

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
        <option value="">Select Your Loaction</option>
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
