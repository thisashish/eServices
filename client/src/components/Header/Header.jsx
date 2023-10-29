import React, { useState } from "react";
import "./Header.css";
import {ULogin} from "../LoginPopup/ULogin";
// import Auth from "../../../components/Auth";

export const Header = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const openPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className="header">
      <div className="header_left">
        <img
          src={process.env.PUBLIC_URL + "/images/banner-all.png"}
          style={{ width: "150px", height: "80px" }}
          className="header_left_img"
        />
      </div>
      <div className="header_right">
        <a href="/service-provider/register" className="header_right_link">
          Join as Service Provider
        </a>
        <a href="/contact" className="header_right_link">
          Contact Us
        </a>
        <button className="header_right_link" onClick={openPopup}>
          Log in
        </button>
        {isPopupVisible && <ULogin onClose={closePopup} />}
        {/* <Auth /> */}
      </div>
    </div>
  );
};
