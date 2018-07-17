import React from 'react';
import { Link } from 'react-router-dom';
import PostForm from '../posts/post_form';

class DrinkIndexItem extends React.Component {

  render() {
    return(
      <div className="drink-item">
          <li className="dp-image-title-parent">
          <img className="p-i-i-photo" src={this.props.drink.photoUrl} />
          <h3 className="bottle-title">{this.props.drink.bottle_name}</h3>
          <div className="dp-link-parent">
            <Link
              className='drink-panel-links'
              to={`/posts/drink/${this.props.drink.id}`}><i
              className="fas fa-info-circle"></i>
            </Link>
            <Link className='drink-panel-links'
              to={`/drinkedit/${this.props.drink.id}`}><i className="far fa-edit"></i></Link>
            <Link className='drink-panel-links'
              drink={this.props.drink}
              to={`posts/postadd`}><i className="fas fa-plus"></i>
            </Link>
          </div>
        </li>
      </div>
    )
  }
}


export default DrinkIndexItem;
