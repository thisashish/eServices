import React from "react";
import { location } from "../Home/Utils";

export const AdminDashboard = () => {
  return (
    <div>
      <label>Add Category</label>
      <form
        action="http://localhost:4001/admin/add/category"
        method="post"
        enctype="multipart/form-data"
      >
        <label>Category Name</label>
        <input name="name" />
        <label>Image</label>
        <input name="img" type="file" />
        <label>Locations</label>
        <select name="locations" multiple>
          {location.map((l) => (
            <option>{l}</option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
