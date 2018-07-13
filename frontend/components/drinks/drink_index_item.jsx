import React from 'react';
import { Link } from 'react-router-dom'

class DrinkIndexItem extends React.Component {

  render() {
    return(
      <div className="drink-item">
        <li>
          <h3 className="bottle-title">{this.props.drink.bottleName}</h3>
          <p className="description">{this.props.drink.description}</p>
          <Link to={`/drinkedit`}>Edit</Link>
      </li>
      </div>
    )
  }
}


export default DrinkIndexItem;
