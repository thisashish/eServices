import React from 'react';
import  './css/ItemDisplay.css';

const Logo = ({ src, targetUrl }) => {
  return (
    <a href={targetUrl}>
      <img
        src={src}
        alt="Logo"
        className="logo-image"
       
      />
    </a>
  );
};

export default Logo;
