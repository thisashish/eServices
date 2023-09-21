import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import Logo from './ItemDisplay';
import './css/Home.css';


const Home = () => {
  
  const navigate = useNavigate();

  const userValid = () => {
    let token = localStorage.getItem("userdbtoken");
    if (token) {
      console.log("user valid")
      navigate('/home');
    } else {
      navigate("*")
    }
  }

  const items = [
    process.env.PUBLIC_URL + '/images/air-conditioner.jpg' ,
    process.env.PUBLIC_URL + '/images/Air-Cooler.jpg',
    process.env.PUBLIC_URL + '/images/appliances.png',
    process.env.PUBLIC_URL + '/images/cctv.jpg',
    process.env.PUBLIC_URL + '/images/fan.jpg',
    process.env.PUBLIC_URL + '/images/laptop.jpg',
    process.env.PUBLIC_URL + '/images/Geyser.jpg',
    process.env.PUBLIC_URL + '/images/desktop.jpg',
    process.env.PUBLIC_URL + '/images/plumbing.png',
    process.env.PUBLIC_URL + '/images/Mobile-Phone.jpg',

  ];

  return (
    <>
    
    <div>
    
        
      
      
      <h1>Logo Gallery</h1>
      <Logo
        src={process.env.PUBLIC_URL + '/images/air-conditioner.jpg'}
        targetUrl="/Airconditioner"
      />
      <Logo
        src={process.env.PUBLIC_URL + '/images/Air-Cooler.jpg'}
        targetUrl="/Aircooler"
      />
      <Logo
        src={process.env.PUBLIC_URL + '/images/appliances.png'}
        targetUrl="/Fridge"
      />
<Logo
        src={process.env.PUBLIC_URL + '/images/cctv.jpg'}
        targetUrl="/Fridge"
      />

<Logo
        src={process.env.PUBLIC_URL + '/images/fan.jpg'}
        targetUrl="/Fridge"
      />

<Logo
        src={process.env.PUBLIC_URL + '/images/laptop.jpg'}
        targetUrl="/Fridge"
      />

<Logo
        src={process.env.PUBLIC_URL + '/images/laptop.jpg'}
        targetUrl="/Fridge"
      />

<Logo
        src={process.env.PUBLIC_URL + '/images/laptop.jpg'}
        targetUrl="/Fridge"
      />

<Logo
        src={process.env.PUBLIC_URL + '/images/laptop.jpg'}
        targetUrl="/Fridge"
      />


<Logo
        src={process.env.PUBLIC_URL + '/images/laptop.jpg'}
        targetUrl="/Fridge"
      />

    </div>
    </>
  );
  const Airconditioner = () => <div>Content for Page 1</div>;
const Aircooler = () => <div>Content for Page 2</div>;
const Fridge = () => <div>Content for Page 3</div>;

};

export default Home;

