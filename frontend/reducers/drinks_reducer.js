import { RECEIVE_DRINK,
  RECEIVE_ALL_DRINKS,
  REMOVE_DRINK } from '../actions/drink_actions';
  import { merge } from 'lodash';

  const drinksReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_ALL_DRINKS:
        return action.drinks;
      case RECEIVE_DRINK:
        return merge({}, state, {[action.drink.id]: action.drink })
      case REMOVE_DRINK:
        const newState = merge({}, state);
        delete newState[action.drinkId];
      default:
        return state;
    };
  };


  export default drinksReucer;
