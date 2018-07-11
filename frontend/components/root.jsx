import React from 'react';
import { Provider } from 'react-redux';
import { hashRouter } from 'react-router-dom';
import App from './App'

const Root = ({ store }) => {
  return (
    <div>
      <Provider store={store}>
        <App />
      </Provider>
     </div>
  )
}

export default Root;
