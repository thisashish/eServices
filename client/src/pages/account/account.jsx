import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import ProfileUpload from './components/ProfileUpload';
import Lead from './components/Lead';
import Laser from './components/Laser';
import Payment from './components/Payment';
import MyProfile from './components/MyProfile';
import MyEarnings from './components/MyEarnings';
import MyServices  from './components/MyServices';


const account = () => {
  return (
    <Router>
    {/* <Header /> */}
    <Switch>
      <Route path="/profile" exact component={ProfileUpload} />
      <Route path="/lead" exact component={Lead} />
      <Route path="/laser" exact component={Laser} />
      <Route path="/payment" exact component={Payment} />
      <Route path="/myprofile" exact component={MyProfile} />
      <Route path="/myearnings" exact component={MyEarnings} />
      <Route path="/myservices" exact component-={MyServices}/>
    </Switch>
  </Router>
  )
}

export default account;
