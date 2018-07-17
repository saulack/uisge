import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import  UserProfile from './user_profile';


const mapStateToProsps = (state, ownProps) => {
  return {
    user: state.entities.users[ownProps.match.params.userId],
    currentUser: window.currentUser.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id))
  };
};


export default connect(mapStateToProsps, mapDispatchToProps)(UserProfile);
