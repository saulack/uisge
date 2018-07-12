import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// NOTE: \/ FOR TESTING ONLY
import { fetchDrinks } from './actions/drink_actions';
// NOTE: /\ FOR TESTING ONLY

document.addEventListener('DOMContentLoaded', () => {

  let preloadedState = {};
  let store;
  if (window.currentUser) {
    preloadedState = {
      entities: {
        users: {
          [window.currentUser.id]: window.currentUser
        },
      },
        session: {
          id: window.currentUser.id
        }
    };
  }

  store = configureStore(preloadedState);

// NOTE:   \/ FOR TESTING ONLY
  window.getState = store.getState;
  window.fetchDrinks = fetchDrinks;
  window.dispatch = store.dispatch;
// NOTE:  /\ FOR TESTING ONLY



  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
