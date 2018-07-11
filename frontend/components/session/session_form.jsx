import React from 'react';
import { Link } from 'react-router-dom';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: '', email: ''}

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
  }



  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
     e.preventDefault();
     const user = Object.assign({}, this.state);
     this.props.processForm(this.state);
   }


   handleErrors() {
     return(
       <ul>
         {this.props.errors.map((error, i) => (
           <li className="errors" key={`err_key${i}`}>
             {error}
           </li>
         ))}
       </ul>
     );
   }

  render() {
    let emailInput;
    if (this.props.formType === 'Sign Up') {
      emailInput = <label className="text-box-box"><i class="fa fa-envelope" aria-hidden="true">   |</i>

        <input className="text-box" onChange={this.update('email')} type="text" />
      </label>;
    }


    return (
      <div className="session-log">

      <form className="log-form" onSubmit={this.handleSubmit}>
        <h1 className="title">UISGE</h1>
        <h3 className="sub-title">Today's rain</h3>
        {this.handleErrors()}

        {emailInput}


        <label className="text-box-box">
          <i class="fa fa-user">   |</i>
          <input className="text-box" onChange={this.update('username')} type="text" value={this.state.username} />
        </label>


        <label className="text-box-box">
          <i class="fa fa-lock" aria-hidden="true">   |</i>
          <input className="text-box" onChange={this.update('password')} type="password" value={this.state.password} />
        </label>


        <input className="submit" type="submit" value={this.props.formType} />
        <div className="line">______________________</div>
        {this.props.navLink}
        </form>
    </div>
    )
  }

}

export default SessionForm;
