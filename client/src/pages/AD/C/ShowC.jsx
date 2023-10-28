import React, { useEffect, useState } from "react";
import { FindC } from "../../../API/C/FindC";
import { DeleteC } from "../../../API/C/DeleteC";

export const ShowC = () => {
  const c = FindC();
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
          {c.map((c, index) => (
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
                <button onClick={() => DeleteC(c._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
