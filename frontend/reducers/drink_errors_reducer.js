import { RECEIVE_DRINK_ERRORS,
  RECEIVE_DRINK,
  RECEIVE_ALL_DRINKS } from '../actions/drink_actions';

const drinkErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DRINK_ERRORS:
      return action.errors;
    case RECEIVE_ALL_DRINKS:
    case RECEIVE_DRINK:
      return [];
    default:
      return state;
  }
};
export default drinkErrorsReducer;
