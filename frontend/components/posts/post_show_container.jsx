import React from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../../actions/post_actions';

class PostShow extends React.Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postId);
  }


  render () {
    const userId = this.props.post.author_id
    const drinkId = this.props.post.drink_id
    debugger

    let username;
    let userPic;
    let drinkPic;
    let drinkInfo;
    let drinkName;
    if (this.props.users[userId]) {
      username = this.props.users[userId].username;
      userPic = this.props.users[userId].pictureUrl;
      drinkName = this.props.drinks[drinkId].bottle_name;
      drinkPic = this.props.drinks[drinkId].photoUrl;
      drinkInfo = this.props.drinks[drinkId].description;
  }





    return (
      <div className="p-show-parent">

        <div className="p-show-drink-box">
         <img className="p-show-drinkpic" src={drinkPic}/>
         <span className="p-show-drink-desc">{drinkInfo}</span>
       </div>

       <div className="p-show-bottom">

          <div className="p-show-user-box">
            <img className="p-show-userpic" src={userPic}/>
            <span className="p-show-username" >{username}</span>
            <span>is drinking</span>
            <span className="p-show-drink-name">{drinkName}</span>
          </div>


          <div className="p-show-post-box">
            <p className="p-show-body">{this.props.post.body}</p>
              <div className="progress">
                <div className="progress-bar p-show-rating" role="progressbar" aria-valuenow={this.props.post.rating}
                  aria-valuemin="0" aria-valuemax="100" style={{width: `50%`}}>
                  {this.props.post.rating}%
                </div>
              </div>
            <img className="p-show-post-photo" src={this.props.post.photoUrl} />
          </div>

        </div>


      </div>
    )
  }
}




const mapStateToProps = (state, ownProps) => {
  return {
    post: state.entities.posts[ownProps.match.params.postId] || {},
    drinks: state.entities.drinks,
    users: state.entities.users,
    currentUserId: state.session.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPost: (id) => dispatch(fetchPost(id))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(PostShow);
