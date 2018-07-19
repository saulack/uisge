import React from 'react';
import { Link } from 'react-router-dom';

class PostIndexItem extends React.Component {
  componentDidMount() {
    this.props.fetchRegions()
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.post.bottle_name !== nextProps.post.bottle_name) {
      this.fetchPosts()
    }
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
          onClick={() => {this.props.deletePost()}}>
          <i class="far fa-trash-alt"></i>
          </button>
      }

    return (
      <div>

        <li className="single-post" >
          <div className="post-intro" >
            <p className="username" >{this.props.users[userId].username} &nbsp;</p>
            <p>is drinking</p>
            <p className="username" >&nbsp; {this.props.drinks[drinkId].bottle_name}</p>
          </div>

          <p className="post-content" >{this.props.post.body}</p>

          <div className="post-content-photo-parent">
            <img className="index-post-photo"
              src={this.props.post.photoUrl}></img>

          </div>

          <div className="progress">
            <div className="progress-bar" role="progressbar" aria-valuenow={this.props.post.rating}
              aria-valuemin="0" aria-valuemax="100" style={{width: `50%`}}>
              {this.props.post.rating}%
            </div>
          </div>



            <div className="post-panel-link-parent" >
              {edit}
              {deleteButton}
            <Link to={'/posts/postshow'} className="post-panel-link">
              <i className="fas fa-info-circle"></i>
            </Link>
          </div>

        </li>
      </div>
    )
  }
}

export default PostIndexItem;
