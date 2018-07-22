import { RECEIVE_DRINK_ERRORS,
         RECEIVE_DRINK,
         RECEIVE_ALL_DRINKS } from '../actions/drink_actions';
import { CLEAR_ERRORS } from '../actions/user_actions';


const drinkErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DRINK_ERRORS:
      return action.errors;
    case RECEIVE_ALL_DRINKS:
    case RECEIVE_DRINK:
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};
export default drinkErrorsReducer;
