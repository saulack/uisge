import { connect } from 'react-redux';
import UserProfileForm from './user_profile_form';
import { fetchUser, updateUser } from '../../actions/user_actions';
const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.users,
    user: state.entities.users[ownProps.match.params.userId],
    formType: 'picture'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateUser: (user, userId) => dispatch(updateUser(user, userId)),
    fetchUser: (id) => dispatch(fetchUser(id))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(UserProfileForm);
