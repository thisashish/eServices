import React from "react";
import { AddCategory } from "./Category/AddCategory";
import { ShowCategory } from "./Category/ShowCategory";

export const AdminDashboard = () => {
  return (
    <div>
      <AddCategory />
      <ShowCategory/>
    </div>
  );
};
