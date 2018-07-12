import { connect } from 'react-redux';
import DrinkForm from './drink_form'
import { updateDrink, fetchRegions, fetchDrink } from '../../actions/drink_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    errors: Object.values(state.errors)
    formType: 'Edit Bottle'
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: drink => dispatch(updateDrink(drink)),
    fetchDrink: id => dispatch(fetchDrink(drink)),
    fetchDrink () => dispatch(fetchRegions())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(DrinkForm)
