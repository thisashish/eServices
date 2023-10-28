import React, { useEffect, useState } from "react";
import { FindCategory } from "../../../API/Category/FindCategory";
import { DeleteCategory } from "../../../API/Category/DeleteCategory";

export const ShowCategory = () => {
  const category = FindCategory();
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Locations</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {category.map((c, index) => (
            <tr key={index}>
              <td>{c.name}</td>
              <td>
                <img
                  src={`http://localhost:4001/${c.img}`}
                  style={{ width: 100, height: 100 }} // Corrected the style object syntax
                  alt={c.name}
                />
              </td>
              <td>
                <ul>
                  {c.locations.map((l, locationIndex) => (
                    <li key={locationIndex}>{l}</li> // Added a unique key for list items
                  ))}
                </ul>
              </td>
              <td>
                <button onClick={() => DeleteCategory(c._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
