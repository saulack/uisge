import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import App from './App'

const Root = ({ store }) => {
  return (
    <div>
      <Provider store={store}>
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>
     </div>
  );
};

export default Root;
