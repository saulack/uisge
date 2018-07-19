import React from 'react';
import { connect } from 'react-redux';


class ProfileIndexItem extends React.Component {
  render(){
    const drinkId = this.props.post.drink_id


    return (
      <div className="user-prof-post-parent">

        <div className="user-prof-header">
          <img className="user-prof-photo" src={this.props.drinks[drinkId].photoUrl}/>
          <span className="username" >&nbsp;{this.props.user.username}</span>
          <span>&nbsp; is drinking</span>
          <span className="username">&nbsp;{this.props.drinks[drinkId].bottle_name}</span>
        </div>

        <div className="progress prog-prof">
          <div className="progress-bar" role="progressbar" aria-valuenow={this.props.post.rating}
            aria-valuemin="0" aria-valuemax="100" style={{width: `50%`}}>
            {this.props.post.rating}%
          </div>
        </div>

        
          <p className="user-prof-body" >{this.props.post.body}</p>
          <img className="user-prof-post-pics" src={this.props.post.photoUrl} />


    </div>
    )
  }

}



const mapStateToProps = (state) => {
  return {
    drinks: state.entities.drinks
  }
}



export default connect(mapStateToProps)(ProfileIndexItem);
