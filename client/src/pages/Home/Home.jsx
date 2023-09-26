import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Logo from "../ItemDisplay";
import "./Home.css";
import { locations } from "../Utils";
import { CategorySelector } from "../../components/CategorySelector";
import { HomeHeader } from "./HomeHeader";
import { Headers } from "../../components/Headers";

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

  const items = [
    process.env.PUBLIC_URL + "/images/air-conditioner.jpg",
    process.env.PUBLIC_URL + "/images/Air-Cooler.jpg",
    process.env.PUBLIC_URL + "/images/appliances.png",
    process.env.PUBLIC_URL + "/images/cctv.jpg",

    process.env.PUBLIC_URL + "/images/fan.jpg",
    process.env.PUBLIC_URL + "/images/laptop.jpg",
    process.env.PUBLIC_URL + "/images/Geyser.jpg",
    process.env.PUBLIC_URL + "/images/desktop.jpg",
    process.env.PUBLIC_URL + "/images/plumbing.png",
    process.env.PUBLIC_URL + "/images/Mobile-Phone.jpg",
  ];

  return (
    <>
      <div className="Home_Headers">
        <Headers />
      </div>
      <HomeHeader />
      <CategorySelector defaultLocation={slug} />
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
