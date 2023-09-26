import React from "react";
import { locations } from "../pages/Utils";

export const CategorySelector = (c) => {
  return (
    <>
      <div className="category-location-box">
        <div className="category-box">
          <label htmlFor="location-select">Location:</label>
          <select
            id="category-select"
            className="category-select"
            defaultValue={c.defaultValue}
            onChange={(e) => (window.location.href = e.target.value)}
          >
            {locations.map((c) => (
              <option value={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};
