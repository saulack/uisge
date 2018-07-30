import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

let mWare = [thunk];
// if (process.env.NODE_ENV !== 'production') {
//   const logger = require('redux-logger');
//   mWare = [...mWare, logger];
// };


const configureStore = (preloadedState = {}) => {
  return createStore(rootReducer, preloadedState, applyMiddleware(...mWare));
};

export default configureStore;
