import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';
import { clearErrors } from '../../actions/user_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    errors: Object.values(state.errors.session),
    formType: 'Log In',
    navLink: <Link to={'/signup'}>Sign Up</Link>,
    currentUserId: state.session.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
