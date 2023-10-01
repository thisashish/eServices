import React from 'react';
import { BrowserRouter, Routes, useParams } from "react-router-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ProfileUpload from './components/ProfileUpload';
import Lead from './components/Lead';
import Laser from './components/Laser';
import Payment from './components/Payment';
import MyProfile from './components/MyProfile';
import MyEarnings from './components/MyEarnings';
import MyServices  from './components/MyServices';





const Account = () => {
    const { slug } = useParams();

    return (
      <BrowserRouter>
    <>
     
<Routes>
<Route path="/account/myearnings" component={MyEarnings} />
        <Route path="/account/myservices" component={MyServices} />
        <Route path="/account/payment" component={Payment} />
        <Route path="/account/profileupload" component={ProfileUpload} />
        </Routes>
      
    </>
    </BrowserRouter>
    );
 
  
   
     
}

export default Account;
