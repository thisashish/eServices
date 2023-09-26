import React from "react";
import {Otp} from "./pages/Otp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Category } from "./pages/Category";
import { PageNotFound } from "./pages/PageNotFound";
import {Headers} from "./components/Headers";
import Home from "./pages/Home/Home";

export const App = () => {
  return (
    <BrowserRouter>
      <>
      {/* <Headers/> */}
        <Routes>
          <Route path="/user/otp" element={<Otp />} />
          <Route path="/:slug" element={<Home />} />
          <Route path="/:slug/:slug" element={<Category />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </>
    </BrowserRouter>
  );
};
