import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import  UserProfile from './user_profile';
import { fetchPosts } from '../../actions/post_actions';
import { fetchDrinks} from '../../actions/drink_actions'

const mapStateToProsps = (state, ownProps) => {
  debugger
  return {
    user: state.entities.users[ownProps.match.params.userId],
    posts: Object.values(state.entities.posts),
    currentUserId: state.session.id

  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchPosts: () => dispatch(fetchPosts()),
    fetchDrinks: () => dispatch(fetchDrinks())
  };
};


export default connect(mapStateToProsps, mapDispatchToProps)(UserProfile);
