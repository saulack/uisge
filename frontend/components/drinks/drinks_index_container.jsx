import { connect } from 'react-redux';
import { fetchDrinks, deleteDrink } from '../../actions/drink_actions';
import DrinkIndex from './drinks_index';

const mapStateToProps = (state, ownProps) => {
  return {
    drinks: Object.values(state.entities.drinks)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchDrinks: () => dispatch(fetchDrinks()),
    deleteDrink: (id) => dispatch(deleteDrink(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrinkIndex);
