import React from 'react';
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


const App = () => {
  return (
   <>
      <Headers />
     
    <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
       
        <Route path='/user/otp' element={<Otp />} />
        <Route path="/home"  element={<Home />} />
        <Route path="/Airconditioner" component={<Airconditioner />} />
        <Route path="/Aircooler" component={<Aircooler />} />
        <Route path="/Fridge" component={<Fridge />} />
        <Route path='*' element={<Error />} />
        </Routes>
    </>
  );
}

export default App;
