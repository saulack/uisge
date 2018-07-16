import React from 'react';
import { Link } from 'react-router-dom';

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchRegions()
  }

  getDrink() => {
    const drinkId = this.props.post.drink_id;

    this.props.drinks.map()
  }


  render(){


    debugger
    return (
      <div>
        <li className="single-post">
          <span></span>
          <p className="post-content">{this.props.post.body}</p>

          <div className="post-panel-link-parent">
            <Link className="post-panel-link" to={'/posts/postedit'}>
              <i className="far fa-edit"></i>
            </Link>

            <Link className="post-panel-link" to={'/posts/postshow'}>
              <i className="fas fa-info-circle"></i>
            </Link>
          </div>

        </li>
      </div>
    )
  }
}

export default PostIndexItem;
