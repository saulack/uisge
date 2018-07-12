import { RECEIVE_REGIONS } from '../actions/drink_actions'


const regionsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_REGIONS:
      let newState = [].push(action.regions)
      return newState;
    default:
      return state;
  };
};

export default regionsReducer;
