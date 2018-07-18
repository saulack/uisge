import React from 'react';
import { Link } from 'react-router-dom'

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.handleRedirect = this.handleRedirect.bind(this);
    this.renderPosts = this.renderPosts.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }


  handleRedirect(type) {
    this.props.history.push(`/users/${this.props.user.id}/${type}`)
  }

  renderPosts() {
    return
    this.props.posts.map((post, i) => {
      return (
        <li key={`up-${i}`}>
          <p>{post.body}</p>
        </li>
      );
    })
  }


  render() {
    return (
      <div>

      <div className="profile">
        <img onClick={() => this.handleRedirect('mural')}className="mural" src={this.props.user.muralUrl}></img>
        <img onClick={() => this.handleRedirect('picture')} className="profile-picture" src={this.props.user.pictureUrl} ></img>
        <h1 className="profile-name">{this.props.user.username}</h1>
      </div>



      <div>
        {this.renderPosts()}
      </div>

    </div>

      )
    }
  }



export default UserProfile;
