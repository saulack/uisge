import React from 'react';
import { Link } from 'react-router-dom';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: '', email: ''}

    this.demoLogin = this.demoLogin.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  demoLogin(e) {
    this.setState({username: 'Guest', password: 'password', email: ''});
    this.handleSubmit()
  }


  handleSubmit(e) {
     this.props.processForm(this.state);
   }


   handleErrors() {
     return(
       <ul className="errors">
         {this.props.errors.map((error, i) => (
           <li key={`err_key${i}`}>
             {error}
           </li>
         ))}
       </ul>
     );
   }

  render() {
    let demo;
    let emailInput;
    if (this.props.formType === 'Sign Up') {
      emailInput = <label className="text-box-box">
        <i className="fa fa-envelope"
          aria-hidden="true">   | &nbsp;</i>

        <input className="text-box"
          onChange={this.update('email')}
          type="text"
          placeholder=" email" />
      </label>;
    } else {
       demo = <button className="demo"
         onClick={this.demoLogin} >Demo Login</button>;
    }


    return (
      <div className="session-log">
        <span className ="form-parent">
      <form className="log-form" onSubmit={this.handleSubmit}>
        <h1 className="title">UISGE</h1>
        <h3 className="sub-title">TODAYS RAIN</h3>
        {this.handleErrors()}

        {emailInput}


        <label className="text-box-box">
          <i className="fa fa-user">   | &nbsp;</i>
          <input className="text-box"
            onChange={this.update('username')}
            type="text"
            value={this.state.username}
            placeholder=" username" />
        </label>


        <label className="text-box-box">
          <i className="fa fa-lock" aria-hidden="true">   | &nbsp;</i>
          <input className="text-box"
            onChange={this.update('password')}
            type="password" value={this.state.password}
            placeholder=" password" />
        </label>


        <input className="submit"
          type="submit"
          value={this.props.formType} />
          {demo}

        <span className="line">______________________</span>
        {this.props.navLink}


        </form>
      </span>
    </div>
    )
  }

}

export default SessionForm;
