import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import GreetingContainer from './greeting/greeting_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import DrinkShowContainer from './drinks/drink_show_container';
import DrinksIndexContainer from './drinks/drinks_index_container';
import CreateDrinkFormContainer from './drinks/create_drink_form_container';
import EditDrinkFormContainer from './drinks/edit_form_container';
import PostIndexContainer from './posts/post_index_container';
import CreatePostFormContainer from './posts/create_post_form_container';
import EditPostFormContainer from './posts/edit_post_container';
import RenderMe from './special/special'

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

        <ProtectedRoute exact path={'/'} component={RenderMe}/>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <ProtectedRoute exact path="/drinkadd" component={CreateDrinkFormContainer} />
        <ProtectedRoute exact path="/drinkedit/:drinkId" component={EditDrinkFormContainer} />
        <ProtectedRoute exact path="/posts" component={DrinksIndexContainer} />
        <ProtectedRoute exact path="/posts/drink/:drinkId" component={DrinkShowContainer} />
        <ProtectedRoute exact path={"/posts/:drinkId/postadd"} component={CreatePostFormContainer} />
        <ProtectedRoute exact path={"/posts/postedit/:postId"} component={EditPostFormContainer} />
    </div>
  );
}

export default App;
