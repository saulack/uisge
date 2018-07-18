import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import  UserProfile from './user_profile';
import { fetchPosts } from '../../actions/post_actions';

const mapStateToProsps = (state, ownProps) => {
  return {
    user: state.entities.users[ownProps.match.params.userId],
    posts: Object.values(state.entities.posts)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchPosts: () => dispatch(fetchPosts())
  };
};


export default connect(mapStateToProsps, mapDispatchToProps)(UserProfile);
