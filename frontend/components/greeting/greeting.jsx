import React from 'react';
import { Link } from 'react-router-dom';


class Greeting extends React.Component {
  constructor(props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    this.props.logout();
  }


  render() {
    if (this.props.currentUser) {
      return(
       <div>
         <h3>{this.props.currentUser.username}</h3>
         <button onClick={this.handleSubmit}>Logout</button>
       </div>
     );
   } else {

      return(
       <div>
         <Link to="/signup">Sign Up!</Link>
         <Link to="/login">Log In</Link>
       </div>
     );
   }
  }
}

export default Greeting;
