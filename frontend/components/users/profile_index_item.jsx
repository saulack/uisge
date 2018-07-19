import React from 'react';
import { connect } from 'react-redux';


class ProfileIndexItem extends React.Component {
  render(){
    return (
      <div className="user-prof-post-parent">

        <img className="user-prof-photo" src={this.props.user.pictureUrl}/>


          <p className="user-prof-body" >{this.props.post.body}</p>
          <span>{this.props.post.rating}</span>
          <img src={this.props.post.photoUrl} />
        

    </div>
    )
  }

}



export default ProfileIndexItem;
