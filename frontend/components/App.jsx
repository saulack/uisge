import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import GreetingContainer from './greeting/greeting_container'

const App = () => {
  return(

    <div>
      <header>
      <h1>UISGE-BEATHA</h1>
      <GreetingContainer />
      </header>


      <Route path="/login" component={LoginFormContainer} />
      <Route path="/signup" component={SignupFormContainer} />


    </div>
  );
}

export default App;
