import React from "react";
import { Otp } from "./src/pages/UAuth/Otp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { C } from "./src/pages/C/C";
import { PageNotFound } from "./src/pages/PageNotFound/PageNotFound";
import Home from "./src/pages/Home/Home";
import { ADashboard } from "./src/pages/AdminDashboard/ADashboard";
import { SPForm } from "./src/pages/SPForm/SPRegistration";
import { Dashboard } from "./src/pages/Dashboard/Dashboard";

export const App = () => {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/user/otp" element={<Otp />} />
          <Route path="/:slug" element={<Home />} />
          <Route path="/:slug/:slug" element={<C />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/admin/dashboard" element={<ADashboard />} />
          <Route path="/service-provider/register" element={<SPForm />} />
          <Route path="/service-provider/dashboard" element={<Dashboard />} />
        </Routes>
      </>
    </BrowserRouter>
  );
};
