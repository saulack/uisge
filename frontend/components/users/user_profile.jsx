import React from 'react';

class UserProfile extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.postId);
  }


  render() {
    debugger
      return (
        <div>
          <h1>{this.porps.user.username}</h1>
        </div>
      )
    }
  }



export default UserProfile;
