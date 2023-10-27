import React, { useEffect, useState } from "react";
import { FindProfile } from "../../../src/Routes/Profile/FindProfile";
// import { DeleteProfile } from "../../../src/Routes/Profile/DeleteProfile";

export const ShowProfile = () => {
  const profile = FindProfile();
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {profile.map((c, index) => (
            <tr key={index}>
              {/* <td>{c.name}</td> */}
              <td>
                <img
                  src={`http://localhost:4001/${c.img}`}
                  style={{ width: 100, height: 100 }} // Corrected the style object syntax
                  alt={c.name}
                />
              </td>

              {/* <td>
                <button onClick={() => DeleteProfile(c._id)}>Delete</button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
