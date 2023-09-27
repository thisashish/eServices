import React from "react";
import { categories, locations } from "../Utils";

import "./CategoryLocationBox.css";

export const CategorySelector = (c) => {
  return (
    <>
      <div className="category-location-box">
        <div className="category-box">
          <label htmlFor="location-select">Location:</label>
          <select
            id="category-select"
            className="category-select"
            defaultValue={c.defaultLocation}
            onChange={(e) => (window.location.href = e.target.value)}
          >
            <option value="">Select a category</option>
            {locations.map((c) => (
              <option value={c}>{c}</option>
            ))}
          </select>
        </div>

        <div className="category-box">
          <label htmlFor="category-select">Category:</label>

          <select
            id="category-select"
            className="category-select"
            onChange={(e) =>
              (window.location.href = c.defaultLocation + "/" + e.target.value)
            }
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};
