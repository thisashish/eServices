import React from "react";
import { AddCategory } from "./C/AddCategory";
import { ShowCategory } from "./C/ShowCategory";
import ShowServiceProvider from "./C/ShowServiceProvider";

export const AD = () => {
  return (
    <div>
      <AddCategory />
      <ShowCategory/>
      <ShowServiceProvider/>
    </div>
  );
};
