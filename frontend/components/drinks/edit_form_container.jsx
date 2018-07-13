import { connect } from 'react-redux';
import DrinkForm from './drink_form'
import { updateDrink, fetchRegions, fetchDrink } from '../../actions/drink_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.drinks,
    formType: 'Edit Bottle',
    regions: Object.values(state.entities.regions)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: drink => dispatch(updateDrink(drink)),
    fetchDrink: id => dispatch(fetchDrink(drink)),
    fetchRegions: () => dispatch(fetchRegions())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(DrinkForm)
