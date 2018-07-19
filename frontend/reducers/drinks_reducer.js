import { merge } from 'lodash';
import { RECEIVE_USER } from '../actions/user_actions'
import { RECEIVE_ALL_POSTS } from '../actions/post_actions';
import { RECEIVE_DRINK,
         RECEIVE_ALL_DRINKS,
         REMOVE_DRINK, } from '../actions/drink_actions';


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
      case RECEIVE_ALL_POSTS:
        return merge({}, state, action.drinks)
      case RECEIVE_USER:
        return merge({}, state, action.drinks)
      default:
        return state;
    };
  };


  export default drinksReducer;
