import React from 'react';
import { Link } from 'react-router-dom';

class DrinkIndexItem extends React.Component {

  render() {
    return(
      <div className="drink-item">
        <li>
          <img className="p-i-i-photo" src={this.props.drink.photoUrl} />
          <h3 className="bottle-title">{this.props.drink.bottleName}</h3>
          <Link to={`/drinkedit/${this.props.drink.id}`}>Edit</Link>
        </li>
      </div>
    )
  }
}


export default DrinkIndexItem;
