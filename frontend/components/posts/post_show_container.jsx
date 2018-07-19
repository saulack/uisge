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

    return (
      <div>

        <p>{this.props.post.body}</p>
      </div>
    )
  }
}




const mapStateToProps = (state, ownProps) => {
  return {
    post: state.entities.posts[ownProps.match.params.postId] || {},
    drinks: state.entities.drinks || {},
    users: state.entities.users || {},
    currentUserId: state.session.id || {}
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPost: (id) => dispatch(fetchPost(id))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(PostShow);
