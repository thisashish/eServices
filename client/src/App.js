import React from "react";
import {Otp} from "./pages/Otp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Category } from "./pages/Category";
import { PageNotFound } from "./pages/PageNotFound";
import Home from "./pages/Home/Home";
import { AdminDashboard } from "./pages/AdminDashboard/AdminDashboard";

export const App = () => {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/user/otp" element={<Otp />} />
          <Route path="/:slug" element={<Home />} />
          <Route path="/:slug/:slug" element={<Category />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </>
    </BrowserRouter>
  );
};
