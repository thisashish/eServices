import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Logo from "../ItemDisplay";
import "./Home.css";
import { locations } from "./Utils";
import { CategoryLocationSelector } from "./Components/CategoryLocationSelector";
import { HomeHeader } from "./Components/HomeHeader";
import { Headers } from "./Components/Headers";

const Home = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const userValid = () => {
    let token = localStorage.getItem("userdbtoken");
    if (token) {
      console.log("user valid");
      navigate("/home");
    } else {
      navigate("*");
    }
  };

  return (
    <>
      <div>
        <div className="Home_Headers">
          <Headers />
        </div>
        <div className="Home_categoryselector">
          <CategoryLocationSelector defaultLocation={slug} />
        </div>
        <HomeHeader />
      </div>
      {locations.includes(slug) ? (
        <div>
          <h1>Logo Gallery</h1>
          <Logo
            src={process.env.PUBLIC_URL + "/images/air-conditioner.jpg"}
            targetUrl="/Airconditioner"
          />
          <Logo
            src={process.env.PUBLIC_URL + "/images/Air-Cooler.jpg"}
            targetUrl="/Aircooler"
          />
          <Logo
            src={process.env.PUBLIC_URL + "/images/appliances.png"}
            targetUrl="/Fridge"
          />
          <Logo
            src={process.env.PUBLIC_URL + "/images/cctv.jpg"}
            targetUrl="/Fridge"
          />

          <Logo
            src={process.env.PUBLIC_URL + "/images/fan.jpg"}
            targetUrl="/Fridge"
          />

          <Logo
            src={process.env.PUBLIC_URL + "/images/laptop.jpg"}
            targetUrl="/Fridge"
          />

          <Logo
            src={process.env.PUBLIC_URL + "/images/laptop.jpg"}
            targetUrl="/Fridge"
          />

          <Logo
            src={process.env.PUBLIC_URL + "/images/laptop.jpg"}
            targetUrl="/Fridge"
          />

          <Logo
            src={process.env.PUBLIC_URL + "/images/laptop.jpg"}
            targetUrl="/Fridge"
          />

          <Logo
            src={process.env.PUBLIC_URL + "/images/laptop.jpg"}
            targetUrl="/Fridge"
          />
        </div>
      ) : (
        <>Nothing</>
      )}
    </>
  );
};

export default Home;
