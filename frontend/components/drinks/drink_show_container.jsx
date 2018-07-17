import React from 'react';
import { connect } from 'react-redux';
import { fetchDrink } from '../../actions/drink_actions';
import { withRouter, Link } from 'react-router-dom';

class DrinkShow extends React.Component {
  componentDidMount() {
    this.props.fetchDrink(this.props.match.params.drinkId)
  }

  render() {
    const drink = this.props.drink || {}
    return (
      <div className="single-drink-parent">
        <img className="big-label" src={drink.photoUrl}/>
        <h2>{drink.bottle_name}</h2>
         <p>{drink.description}</p>
         <Link to={`/posts/drinkedit/${drink.id}`}>Edit</Link>
         <Link to={'/posts'}>Back to posts</Link>

      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    drink: state.entities.drinks[ownProps.match.params.drinkId],
    regions: state.regions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchDrink: (id) => dispatch(fetchDrink(id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DrinkShow));
