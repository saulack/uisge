import React from 'react';
import DrinkIndexItem from './drink_index_item';
import { Link } from 'react-router-dom';
import PostIndexContainer from '../posts/post_index_container';


class DrinksIndex extends React.Component {
  componentDidMount() {
    this.props.fetchDrinks();
  }



  render() {
    const drink = this.props.drinks.map( drink => {
      return (
        <DrinkIndexItem
        className="drink-index-parent"
        key={`drink-${drink.id}`}
        drink={drink}
        deleteDrink={this.props.deleteDrink} />
      );
     })
    return (
      <div>
      <div className="drink-index">
        <span className="create-drink"><Link to={'/drinkadd'}>Add Drink</Link></span>
        <ul className="drink-list">
          {drink}
        </ul>
      </div>
        <PostIndexContainer drinks={this.props.drinks} />
      </div>
    )
  }
}

export default DrinksIndex;
