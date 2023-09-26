import React from "react";
import "./Header.css";
import Auth from "./Auth";

export const Headers = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img
          src={process.env.PUBLIC_URL + "/images/banner-all.png"}
          style={{ width: "150px", height: "80px" }}
        />
      </div>
      <div className="menu">
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/category">Category</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
        </ul>
      </div>

      <Auth />
    </div>
  );
};
