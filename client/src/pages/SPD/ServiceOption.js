// ServiceOption.js
import React from 'react';

const ServiceOption = ({ title, onClick }) => (
  <div>
    <button onClick={onClick}>{title}</button>
  </div>
);

export default ServiceOption;
