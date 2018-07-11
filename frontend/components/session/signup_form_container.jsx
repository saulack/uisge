import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import { Link } from 'react-router-dom'



const mapStateToProps = (state, ownProps) => {
  return {
    errors: Object.values(state.errors),
    formType: 'Sign Up',
    navLink: <Link to={'/login'}>log In</Link>
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: () => dispatch(signup(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
