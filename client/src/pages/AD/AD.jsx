import React from "react";
import { AddCategory } from "./C/AddCategory";
import { ShowCategory } from "./C/ShowCategory";
import ShowServiceProvider from "./C/ShowServiceProvider";

export const AdminDashboard = () => {
  return (
    <div>
      <AddCategory />
      <ShowCategory/>
      <ShowServiceProvider/>
    </div>
  );
};
