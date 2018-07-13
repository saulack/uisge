import { connect } from 'react-redux';
import DrinkForm from './drink_form'
import { createDrink, fetchRegions } from '../../actions/drink_actions';



const mapStateToProps = state => {
  return  {
    errors: state.errors.drinks,
    formType: 'Create Bottle',
    regions: Object.values(state.entities.regions)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    action: (drink) => dispatch(createDrink(drink)),
    fetchRegions: () => dispatch(fetchRegions())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(DrinkForm)
