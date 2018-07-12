import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import GreetingContainer from './greeting/greeting_container';
import { AuthRoute } from '../util/route_util';


const App = () => {
  return(

    <div>
      <header className="navBar">
      <span className="logo">
        <h1 className="header-title">UISGE</h1>
        <h2 className="subtitle" >TODAYS RAIN</h2>
      </span>
      <GreetingContainer />
      </header>


        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />



    </div>
  );
}

export default App;
