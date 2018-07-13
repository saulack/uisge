import React from 'react';

class DrinksIndex extends React.Component {
  componenetDidMount() {
    this.props.fetchDrinks();
  }


  render() {
    const drink = this.porps.drinks.map( drink => {
      return <DrinkIndexItem drink={ drink } />
    })

    return (
      <div>
        {drink}
      </div>
    )
  }

export default DrinksIndex;
