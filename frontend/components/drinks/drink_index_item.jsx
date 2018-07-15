import React from 'react';
import { Link } from 'react-router-dom';
import PostForm from '../posts/post_form';

class DrinkIndexItem extends React.Component {



  render() {
    return(
      <div className="drink-item">
        <li>
          <img className="p-i-i-photo" src={this.props.drink.photoUrl} />
          <h3 className="bottle-title">{this.props.drink.bottle_name}</h3>
          <Link to={`/drinkedit/${this.props.drink.id}`}>Edit</Link>
          <Link to={`/posts/${this.props.drink.id}`}>More</Link>
          <Link to={`posts/postadd`}>Chcek in</Link>

      </li>

      </div>
    )
  }
}


export default DrinkIndexItem;
