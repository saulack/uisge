import React from 'react';
import DrinkIndexItem from './drink_index_item';
import { Link } from 'react-router-dom';
import PostIndexContainer from '../posts/post_index_container';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class DrinksIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {inputVal: ''}

    this.handleInput = this.handleInput.bind(this);
    this.selectDrink = this.selectDrink.bind(this);
  }

  componentDidMount() {
    this.props.fetchDrinks();
  }


  handleInput(event) {
    this.setState({inputVal: event.currentTarget.value});

  }
    matches() {
      const matches = [];
      if (this.state.inputVal.length === 0) {
        return this.props.drinks;
      }

      this.props.drinks.forEach(drink => {
        let sub = drink.bottle_name.slice(0, this.state.inputVal.length);
        if (sub.toLowerCase() === this.state.inputVal.toLowerCase()) {
          matches.push(drink);
        }
      });

      if (matches.length === 0) {
        matches.push('No matches');
      }

      return matches;
    }

    selectDrink(event) {
      let drink = event.currentTarget.innerText;
      this.setState({inputVal: drink});
    }


  render() {
    let drink = this.matches().map((drink, i) => {
          return ( <DrinkIndexItem drink={drink}
            className="drink-index-parent"
            key={`drink-${drink.id}`}
            deleteDrink={this.props.deleteDrink} />
          );
        });


    return (
      <div className="post-and-drink-parent">
        <div className="post-in-drink">
          <PostIndexContainer  />
        </div>

        <div className="drink-index">
          <div className="search-parent">
            &nbsp;<i className="fas fa-search"> | &nbsp;</i>

          <input onChange={this.handleInput}
            className="search"
            type="search"
            placeholder="search drinks..."
            value={this.state.bottle_name} />
          </div>

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
