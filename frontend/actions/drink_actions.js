import * as DrinkApiUtil from '../util/drinks_api_util'


export const RECEIVE_ALL_DRINKS = 'RECEIVE_ALL_DRINKS';
export const RECEIVE_DRINK = 'RECEIVE_DRINK';
export const REMOVE_DRINK = 'REMOVE_DRINK';
export const RECEIVE_REGIONS = 'RECEIVE_REGIONS';
export const RECEIVE_DRINK_ERRORS = 'RECEIVE_DRINK_ERRORS';


export const receiveAllDrinks = (drinks) => {
  return {
    type: RECEIVE_ALL_DRINKS,
    drinks
  };
};

export const receiveDrink = drink => {
  return {
    type: RECEIVE_DRINK,
    drink
  };
};


export const removeDrink = (drink) => {
  return {
    type: REMOVE_DRINK,
    drinkId: drink.id
  };
};


export const receiveDrinkErrors = (errors) => {
  return {
    type: RECEIVE_DRINK_ERRORS,
    errors
  };
};

export const fetchRegions = () => {
  return dispatch => {
    return DrinkApiUtil.fetchRegions().then( regions => {
      return dispatch({
        type: RECEIVE_REGIONS,
        regions
      });
    })
  }
}


export const fetchDrinks = () => {
  return dispatch => {
    return DrinkApiUtil.fetchDrinks().then(drinks => {
      return dispatch(receiveAllDrinks(drinks)), err => {
        return dispatch(receiveDrinkErrors(err.responseJSON));
      }
    });
  };
};

export const fetchDrink = (id) => {
  return dispatch => {
    return DrinkApiUtil.fetchDrink(id).then( drink => {
      return dispatch(receiveDrink(drink)), err => {
        return dispatch(receiveDrinkErrors(err.responseJSON));
      }
    });
  };
};



export const updateDrink = (drink) => {
  return dispatch => {
    return DrinkApiUtil.updateDrink(drink).then( drink => {
      return dispatch(receiveDrink(drink)), err => {
        return dispatch(receiveDrinkErrors(err.responseJSON));
      }
    });
  };
};

export const createDrink = (formData) => {
  return dispatch => {
    return DrinkApiUtil.createDrink(formData).then( drink => {
      return dispatch(receiveDrink(drink)), err => {
        return dispatch(receiveDrinkErrors(err.resonseJSON));
      }
    });
  };
};

export const deleteDrink = id => {
  return dispatch => {
    return DrinkApiUtil.deleteDrink(id).then( drink => {
      return dispatch(removeDrink(drink)), err => {
        return dispatch(receiveDrinkErrors(err.responseJSON));
      }
    });
  };
};
