import React from 'react';
import DrinkForm from './drink_form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateDrink, fetchRegions, fetchDrink } from '../../actions/drink_actions';

class EditDrinkForm extends React.Component {
  componentDidMount() {
    this.props.fetchDrink(this.props.match.params.drinkId);
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
    action: (drink, drinkId) => dispatch(updateDrink(drink, drinkId)),
    fetchDrink: id => dispatch(fetchDrink(id)),
    fetchRegions: () => dispatch(fetchRegions())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditDrinkForm));
