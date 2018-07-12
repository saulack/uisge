import { RECEIVE_DRINK,
  RECEIVE_ALL_DRINKS,
  REMOVE_DRINK, } from '../actions/drink_actions';
  import { merge } from 'lodash';

  const drinksReducer = (state = {}, action) => {
    switch (action.type) {
      case RECEIVE_ALL_DRINKS:
        return  merge({}, state, action.drinks)
      case RECEIVE_DRINK:
        return merge({}, state, {[action.drink.id]: action.drink })
      case REMOVE_DRINK:
        let newState = merge({}, state);
        delete newState[action.drinkId];
        return newState;
      default:
        return state;
    };
  };


  export default drinksReducer;
