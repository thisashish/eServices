import React from "react";
import { Otp } from "./pages/Auth/Otp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Category } from "./pages/Category/Category";
import { PageNotFound } from "./pages/PageNotFound/PageNotFound";
import Home from "./pages/Home/Home";
import { AdminDashboard } from "./pages/AdminDashboard/AdminDashboard";
import { ServiceProviderForm } from "./pages/ServiceProviderForm/ServiceProviderRegistration";
import { MyEarnings } from "./pages/Dashboard/MyEarnings";
import { ProfileUpload } from "./pages/Dashboard/ProfileUpload";
import { MyServices } from "./pages/Dashboard/MyServices";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import Account from "./pages/Dashboard/Account";
import { Payment } from "./pages/Dashboard/Payment";

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
          <Route
            path="/service-provider/account/myearnings"
            element={<MyEarnings />}
          />
          <Route
            path="/service-provider/account/myservices"
            element={<MyServices />}
          />
          <Route
            path="/service-provider/account/payment"
            element={<Payment />}
          />
          <Route
            path="/service-provider/account/profileupload"
            element={<ProfileUpload />}
          />
          <Route path="/service-provider/dashboard" element={<Dashboard />} />
        </Routes>
      </>
    </BrowserRouter>
  );
};
