import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import GreetingContainer from './greeting/greeting_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import createDrinkContainer from './drinks/create_drink_form_container';
import editDrinkContainer from './drinks/edit_form_container';
import DrinksIndexContainer from './drinks/drinks_index_container';
import DrinkShowContainer from './drinks/drink_show_container';
import PostIndexContainer from './posts/post_index_container';
import CreatePostFormContainer from './posts/create_post_form_container';

const App = () => {
  return(

    <div>
      <header className="navBar">
      <span className="logo">
        <h1 className="header-title"><Link to={'/posts'}>UISGE</Link></h1>
        <h2 className="subtitle" >TODAYS RAIN</h2>
        </span>
          <GreetingContainer />
        </header>


        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <ProtectedRoute exact path="/drinkadd" component={createDrinkContainer} />
        <ProtectedRoute exact path="/drinkedit/:drinkId" component={editDrinkContainer} />
        <ProtectedRoute exact path="/posts" component={PostIndexContainer} />
        <ProtectedRoute exact path="/posts/drink/:drinkId" component={DrinkShowContainer} />
        <ProtectedRoute exact path={"/posts/postadd"} component={CreatePostFormContainer} />
    </div>
  );
}

export default App;

// <ProtectedRoute exact path="/posts" component={DrinksIndexContainer} />
