import React, { useEffect, useState } from "react";
import "./Header.css";
import { ULoginSignupPopup } from "./ULoginSignupPopup";
import axios from "axios";

export const Header = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [loginuser, setLoginuser] = useState([]);

  const openPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };
  useEffect(() => {
    const userlogin = async () => {
      const user = await axios.get("/U/find/one", {
        withCredentials: true,
        headers: {
          Accept: "application.json",
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      });
      setLoginuser(user.data);
    };
    userlogin();
    if (isPopupVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Clean up the effect when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isPopupVisible]);
  const handlelogout = async () => {
    const res = await axios.get("/U/auth/logout", {
      withCredentials: true,
      headers: {
        Accept: "application.json",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });

    if (res.status === 200) {
      window.location.href = "/";
    } else {
    }
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
        {loginuser.length !== 0 ? (
          <>
            <p>{loginuser.fname}</p>
            <button onClick={handlelogout}>Logout</button>
          </>
        ) : (
          <button className="header_right_link" onClick={openPopup}>
            Log in
          </button>
        )}
        {isPopupVisible && <ULoginSignupPopup onClose={closePopup} />}
        {/* <Auth /> */}
      </div>
    </div>
  );
};
