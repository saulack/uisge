import { connect } from 'react-redux';
import DrinkForm from './drink_form'
import { createDrink, fetchRegions } from '../../actions/drink_actions';



const mapStateToProps = state => {
  return  {
    errors: Object.values(state.errors),
    formType: 'Create Bottle'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    action: (drink) => dispatch(createDrink(drink)),
    fetchRegions: () => dispatch(fetchRegions())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(DrinkForm)
