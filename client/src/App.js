import React, { useState } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import  Home from './pages/Home';
import Otp from './pages/Otp';
import Error from './pages/Error';
import Headers from './components/Headers';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Logo from '../src/pages/ItemDisplay';
import Airconditioner from './components/Category/Airconditioner';
import Aircooler from './components/Category/Aircooler';
import Fridge from './components/Category/Fridge';


import CategoryLocationBox from './components/CategoryLocationBox';

const App = () => {

  const [selectedCategory, setSelectedCategory] = useState('AC Repair');
  const [selectedLocation, setSelectedLocation] = useState('Palia Kalan');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleLocationChange = (location) => {
    setSelectedLocation(location);
  };


  return (
   <>
      <Headers />
      <div className="App">
      <header className="App-header">
        {/* Render the CategoryLocationBox component */}
        <CategoryLocationBox
          onCategoryChange={handleCategoryChange}
          onLocationChange={handleLocationChange}
        />
        <p>Selected Category: {selectedCategory}</p>
        <p>Selected Location: {selectedLocation}</p>
      </header>
    </div>
      
     
    <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/register' element={<Register />} /> */}
       
        <Route path='/user/otp' element={<Otp />} />
        <Route path='/:slug' element={<Home/>}/> 
       <Route path="/"  element={<Home />} />
{/*         
       <Route path="/Airconditioner" component={<Airconditioner />} />
       <Route path="/Aircooler" component={<Aircooler />} />
       <Route path="/Fridge" component={<Fridge />} />  */}
        <Route path='*' element={<Error />} />
        </Routes>
    </>
  );
}

export default App;
