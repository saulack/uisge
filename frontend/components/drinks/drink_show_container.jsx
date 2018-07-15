import React from 'react';
import { connect } from 'react-redux';
import { fetchDrink } from '../../actions/drink_actions';

class DrinkShow extends React.Component {
  componentDidMount() {
    this.props.fetchDrink(this.props.match.params.drinkId)
  }


  render() {
    return (
      <div className="single-drink-parent">
        <span className="bottle-name-show" >DRANK</span>
      </div>
    )
  }
}



const mapStateToProps = (state, ownProps) => {
  return {
    drink: state.entities.drinks[ownProps.match.params.drinkId]
  };
};


const mapDispatchToProps = dispatch => {
  return {
    fetchDrink: (id) => dispatch(fetchDrink(id))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(DrinkShow);
