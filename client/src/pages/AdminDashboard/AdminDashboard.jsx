import React from "react";
import { AddCategory } from "./Category/AddCategory";
import { ShowCategory } from "./Category/ShowCategory";
import ShowServiceProvider from "./Category/ShowServiceProvider";

export const AdminDashboard = () => {
  return (
    <div>
      <AddCategory />
      <ShowCategory/>
      <ShowServiceProvider/>
    </div>
  );
};
