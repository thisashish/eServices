import React from "react";
import { Otp } from "./pages/Auth/Otp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Category } from "./pages/Category/Category";
import { PageNotFound } from "./pages/PageNotFound/PageNotFound";
import Home from "./pages/Home/Home";
import { AdminDashboard } from "./pages/AdminDashboard/AdminDashboard";
import { ServiceProviderForm } from "./pages/ServiceProviderForm/ServiceProviderRegistration";
import Account  from "./pages/account/Account";

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
          <Route
            path="/service-provider/register"
            element={<ServiceProviderForm />}
          />
          <Route path="/service-provider/account" element={<Account />} />
        </Routes>
      </>
    </BrowserRouter>
  );
};
