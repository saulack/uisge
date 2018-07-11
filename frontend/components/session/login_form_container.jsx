import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { Link } from 'react-router-dom'



const mapStateToProps = (state, ownProps) => {
  return {
    errors: Object.values(state.errors),
    formType: 'login',
    navLink: <Link to={'/signup'}>Sign Up</Link>
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: () => dispatch(login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
