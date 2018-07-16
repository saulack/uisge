import { RECEIVE_ERRORS,
  RECEIVE_DRINK,
  RECEIVE_ALL_DRINKS, } from '../actions/drink_actions';

const drinkErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ERRORS:
    debugger
     return action.errors.drinks;
    case RECEIVE_ALL_DRINKS:
      return [];
    case RECEIVE_DRINK:
      return [];
    default:
      return state;
  }
};
export default drinkErrorsReducer;
