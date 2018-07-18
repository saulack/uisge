import React from 'react';

class UserProfile extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.postId);
  }


  render() {
    

      return (
        <div className="profile">
          <img className="mural" src={this.props.user.muralUrl}></img>
          <img className="profile-picture" src={this.props.user.pictureUrl} ></img>
          <h1 className="profile-name">{this.props.user.username}</h1>
        </div>
      )
    }
  }



export default UserProfile;
