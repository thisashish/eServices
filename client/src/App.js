//imp
////pkg
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
////file
import { C } from "./pages/C/C";
import { PageNotFound } from "./pages/PageNotFound/PageNotFound";
import Home from "./pages/Home/Home";
import { AD } from "./pages/AD/AD";
import { SPRegistration } from "./pages/SP/SPRegistration";
import { D } from "./pages/SP/D";
import { SPLogin } from "./pages/SP/SPLogin";

//code
export const App = () => {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/service-provider/register"
            element={<SPRegistration />}
          />
          <Route path="/service-provider/dashboard" element={<D />} />
          <Route path="/service-provider/login" element={<SPLogin />} />
          <Route path="/:slug" element={<Home />} />
          <Route path="/:slug/:slug" element={<C />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/admin/dashboard" element={<AD />} />
        </Routes>
      </>
    </BrowserRouter>
  );
};
