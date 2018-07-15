import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// NOTE: IMPORTS \/ FOR TESTING ONLY
import { fetchPosts } from './util/post_api_util'
// NOTE: IMPORTS /\ FOR TESTING ONLY

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

// NOTE:  WINDOW FUNKS \/ FOR TESTING ONLY
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchPosts = fetchPosts
// NOTE:  WINDOW FUNKS/\ FOR TESTING ONLY



  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
