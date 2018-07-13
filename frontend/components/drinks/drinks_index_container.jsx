import { connect } from 'react-redux';
import { fetchDrinks, deleteDrink } from '../../actions/drink_actions';
import DrinkIndex from './drinks_index';

const mapStateToProps = (state,  ownProps) => {
  return {
    drinks: state.drinks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchDrinks: () => dispatch(fetchDrinks()),
    deleteDrink: (id) => dispatch(deleteDrink),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrinkIndex);
