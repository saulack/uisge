import React from 'react';
import { Link } from 'react-router-dom';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: '', email: ''}

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
     e.preventDefault();
     const user = Object.assign({}, this.state);
     this.props.processForm();
   }


  render() {
    let emailInput;
    if (this.props.formType === 'Sign Up') {
      emailInput = <lable>email:<input className="text-box" onChange={this.update('email')} type="text" /></lable>;
    }

    return (
      <div className="session-log">

      <form className="log-form" onSubmit={this.handleSubmit}>
        <h1 className="title">{this.props.formType}</h1>
        <label> Username:
          <input className="text-box" onChange={this.update('username')} type="text" value={this.state.username} />
        </label>
        <label> Password:
          <input className="text-box" onChange={this.update('password')} type="password" value={this.state.password} />
        </label>
        {emailInput}
        <input type="submit" value={this.props.formType} />
      </form>
      {this.props.navLink}
    </div>
    )
  }

}

export default SessionForm;
