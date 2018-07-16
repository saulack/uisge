import React from 'react';
import { Link } from 'react-router-dom';

class PostIndexItem extends React.Component {
  constructor(props){
    super(props);

    this.getDrinkVals = this.getDrinkVals.bind(this)
  }

  componentDidMount() {
    this.props.fetchRegions();
  }


  getDrinkVals() {
    this.props.drinks.map( drink => {
      if (this.props.post.drink_id === drink.id)
      return drink;
    })
  }


  render(){
    const thisDrink = this.getDrinkVals()
    return (
      <div>
        <li className="single-post">
          <h1>Hello</h1>
          <span className="post-content">{this.props.post.body}</span>

          <div className="post-panel-link-parent">
            <Link className="post-panel-link" to={'/posts/postedit'}><i className="far fa-edit"></i></Link>
            <Link className="post-panel-link" to={'/posts/postshow'}><i
            className="fas fa-info-circle"></i></Link>
          </div>

        </li>
      </div>
    )
  }
}

export default PostIndexItem;
