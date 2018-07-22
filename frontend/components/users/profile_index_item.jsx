import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ProfileIndexItem extends React.Component {
  render(){
    const drinkId = this.props.post.drink_id


    return (
      <div className="user-prof-post-parent">

        <div className="user-prof-header">
          <Link  to={`/posts/drink/${drinkId}`}>
            <img className="user-prof-photo" src={this.props.drinks[drinkId].photoUrl}/>
          </Link>
          <span className="username" >&nbsp;{this.props.user.username}</span>
          <span>&nbsp; is drinking</span>
            <Link className="username" to={`/posts/drink/${drinkId}`} >
              <span >&nbsp;{this.props.drinks[drinkId].bottle_name}</span>
            </Link>
          </div>


        <div className="progress prog-prof">
          <div className="progress-bar" role="progressbar"
            aria-valuemin="0"
            aria-valuemax="100" 
            style={{width: `${this.props.post.rating}%`}}>
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
