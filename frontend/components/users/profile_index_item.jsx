import React from 'react';
import { connect } from 'react-redux';


class ProfileIndexItem extends React.Component {

  render(){
    const drinkId = this.props.post.drink_id


    return (
      <div className="user-prof-post-parent">


        <img className="user-prof-photo" src={this.props.drinks[drinkId].photoUrl}/>
          <p className="user-prof-body" >{this.props.post.body}</p>
          <span>{this.props.drinks[drinkId].bottle_name}</span>
          <img className="user-prof-post-pics" src={this.props.post.photoUrl} />
          <span>{this.props.post.rating}</span>


    </div>
    )
  }

}



const mapStateToProps = (state, ownProps) => {
  return {
    drinks: state.entities.drinks
  }
}



export default connect(mapStateToProps)(ProfileIndexItem);
