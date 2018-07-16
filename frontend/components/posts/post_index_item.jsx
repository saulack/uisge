import React from 'react';
import { Link } from 'react-router-dom';

class PostIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.post

  }

  // componentDidMount() {
  //   this.props.fetchRegions();
  // }




  render(){

    return (
      <div>
        <li className="single-post">
          // <h1>{this.props.drink}</h1>
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
