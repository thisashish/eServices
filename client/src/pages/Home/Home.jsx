import React, { useEffect, useState } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";
import "./Home.css";
import { CategoryLocationSelector } from "./Components/CategoryLocationSelector";
import { HomeHeader } from "./Components/HomeHeader";
import { Headers } from "./Components/Headers";
import axios from "axios";
import { location } from "./Utils";

const Home = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const res = async () => {
      const res1 = await axios.get("/category/find/all");
      setCategory(res1.data);
      console.log(res1.data);
    };
    res();
  }, []);

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
      {location.includes(slug) ? (
        <div>
          <h1>Categories</h1>
          <div className="Home_Category">
            {category.map((c) =>
              c.locations.includes(slug) ? (
                <div className="Home_Category_Div" key={c.name}>
                  <Link to={`/${slug}/${c.name}`}>
                    <img
                      className="Home_Category_Div_Img"
                      src={c.img}
                      alt={c.name}
                    />
                    <p>{c.name}</p>
                  </Link>
                </div>
              ) : (
                <></>
              )
            )}
          </div>
        </div>
      ) : (
        <>Nothing</>
      )}
    </>
  );
};

export default Home;
