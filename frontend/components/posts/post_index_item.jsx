import React from 'react';
import { Link } from 'react-router-dom';
import PostShow from './post_show_container';

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchRegions();
  }

  handleDelete() {
    this.props.deletePost(this.props.post.id);
  }

  render(){
    const drinkId = this.props.post.drink_id
    const userId = this.props.post.author_id
    let edit;
    let deleteButton;
    if (this.props.post.author_id === this.props.currentUserId) {
      edit = <Link to={`/posts/postedit/${this.props.post.id}`} className="post-panel-link">
        <i className="far fa-edit" ></i>
      </Link>

      deleteButton = <button className="post-panel-link"
        onClick={this.handleDelete}>
        <i className="far fa-trash-alt"></i>
      </button>
    }

    return (
      <div>
        <li className="single-post" >
          <div className="post-intro" >
            <Link className="username" to={`/users/${userId}`}>
              <img className="main-post-pic" src={this.props.users[userId].pictureUrl}/>
            </Link>
            <Link className="username" to={`/users/${userId}`}>
              <p>{this.props.users[userId].username} &nbsp;</p>
            </Link>
            <p className="textmid">is drinking</p>
            <Link className="username" to={`posts/drink/${drinkId}`}>
              <p>&nbsp; {this.props.drinks[drinkId].bottle_name}</p>
            </Link>
          </div>

          <p className="post-content" >{this.props.post.body}</p>

          <div className="post-content-photo-parent">
            src={this.props.post.photoUrl}></img>
            <img className="index-post-photo"
          </div>
          <div className="progress">
            <div className="progress-bar"
              role="progressbar"
              aria-valuenow={this.props.post.rating}
              aria-valuemin="0"
              aria-valuemax="100"
              style={{width: `${this.props.post.rating}%`}}>
              {this.props.post.rating}%
            </div>
          </div>

          <div className="post-panel-link-parent" >
            {edit}
            {deleteButton}
            <Link to={`/posts/postshow/${this.props.post.id}`} className="post-panel-link">
              <i className="fas fa-info-circle"></i>
            </Link>
          </div>
        </li>
      </div>
    )
  }
}

export default PostIndexItem;
