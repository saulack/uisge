import React from 'react';
import { Link } from 'react-router-dom';

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchRegions()
  }


  render(){
      const drinkId = this.props.post.drink_id
      // const redionId = this.props.drinks[drinkId].region_id
      // const userId = this.props.post.user_id
      debugger
    return (
      <div>
        <li className="single-post">
          <div className="post-intro">
            <p className="username" >#username &nbsp;</p>
            <p>is drinking</p>
            <p className="username">&nbsp;{this.props.drinks[drinkId].bottle_name}</p>
          </div>
          <p className="post-content">{this.props.post.body}</p>
          <p>{this.props.post.rating}</p>

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
