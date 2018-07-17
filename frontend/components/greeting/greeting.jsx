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

         <div className="sign-name-parent">
           <Link to={`/users/${currentUser.id}`}><h2 className="sign-user user-img-nav">{this.props.currentUser.username}</h2></Link>
           <button className="sign-user" onClick={this.handleSubmit}>Logout</button>
         </div>
     );
   } else {

      return(

         <div className="sign-name-parent">
           <div className="sign-user">
             <Link to="/signup">Sign Up</Link>
           </div>

           <div className="sign-user">
             <Link to="/login">Log In</Link>
           </div>
         </div>

     );
   }
  }
}

export default Greeting;
