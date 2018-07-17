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
        <DrinkIndexItem drink={drink}
        className="drink-index-parent"
        key={`drink-${drink.id}`}

        deleteDrink={this.props.deleteDrink} />
      );
     })
    return (
      <div className="post-and-drink-parent">
        <div className="post-in-drink">
          <PostIndexContainer  />
        </div>

        <div className="drink-index">
          <span className="create-drink"><Link to={'/drinkadd'}>Add Drink</Link></span>
        <ul className="drink-list">
          {drink}
        </ul>
      </div>
      </div>
    )
  }
}

export default DrinksIndex;
