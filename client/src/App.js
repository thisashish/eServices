//imp

////pkg
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

////file
import { Otp } from "./pages/UAuth/Otp";
import { C } from "./pages/C/C";
import { PageNotFound } from "./pages/PageNotFound/PageNotFound";
import Home from "./pages/Home/Home";
import { AD } from "./pages/AD/AD";
import { SPForm } from "./pages/SPForm/SPRegistration";
import { D } from "./pages/SPD/D";

//code
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
          <Route path="/admin/dashboard" element={<AD />} />
          <Route path="/service-provider/register" element={<SPForm />} />
          <Route path="/service-provider/dashboard" element={<D />} />
        </Routes>
      </>
    </BrowserRouter>
  );
};
