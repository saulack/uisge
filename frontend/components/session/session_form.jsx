import React from 'react';

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
     this.props.processForm(user);
   }


  render() {
    let emailInput;
    if (this.props.formType === signup) {
      emailInput = <input onChange={this.update('email')} type="text" />
    }

    return (
      <div>
        <h1>UISGE</h1>
        <h3>{this.props.formType}</h3>
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.update('username')} type="text" value={this.state.username} />
        <input onChange={this.update('password')} type="password" value={this.state.password} />
        {emailInput}
        <input type="submit" value={this.props.formType} />
      </form>
    </div>
    )
  }

}

export default SessionForm;
