import React from 'react';
import { Link } from 'react-router-dom'

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.handleRedirect = this.handleRedirect.bind(this);

  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }

  handleRedirect(type) {
    this.props.history.push(`/users/${this.props.user.id}/${type}`)
  }


  render() {


      return (
        <div className="profile">
          <img onClick={() => this.handleRedirect('mural')}className="mural" src={this.props.user.muralUrl}></img>
          <img onClick={() => this.handleRedirect('picture')} className="profile-picture" src={this.props.user.pictureUrl} ></img>
          <h1 className="profile-name">{this.props.user.username}</h1>
        </div>
      )

    }
  }



export default UserProfile;
