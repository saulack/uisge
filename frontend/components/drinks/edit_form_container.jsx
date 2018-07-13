import React from 'react';
import { connect } from 'react-redux';
import DrinkForm from './drink_form';
import { updateDrink, fetchRegions, fetchDrink } from '../../actions/drink_actions';

class EditDrinkForm extends React.Component {
  componentDidMount() {
    debugger
    this.props.fetchDrink(this.props.drink.id);
  }

  render() {
    return (
      <DrinkForm
        action={this.props.action}
        formType={this.props.formType}
        drink={this.props.drink}
        regions={this.props.regions}
        errors={this.props.errors}
        fetchRegions={this.props.fetchRegions} />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    drink: state.entities.drinks[ownProps.match.params.drinkId],
    errors: state.errors.drinks,
    formType: 'Edit Bottle',
    regions: Object.values(state.entities.regions)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: drink => dispatch(updateDrink(drink)),
    fetchDrink: id => dispatch(fetchDrink(id)),
    fetchRegions: () => dispatch(fetchRegions())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditDrinkForm);
