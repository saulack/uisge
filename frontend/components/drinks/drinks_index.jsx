import React from 'react';
import DrinkIndexItem from './drink_index_item';

class DrinksIndex extends React.Component {
  componentDidMount() {
    this.props.fetchDrinks();
  }


  render() {
    const drink = this.props.drinks.map( drink => {
      return (
        <DrinkIndexItem
        className="drink-index-parent"
        key={drink.id}
        drink={drink}
        deleteDrink={this.props.deleteDrink} />
      );
     })
    return (
      <div className="drink-index">
        <ul className="drink-list">
          {drink}
        </ul>
      </div>
    )
  }
}

export default DrinksIndex;
