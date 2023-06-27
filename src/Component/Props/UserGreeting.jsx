import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  render() {

    // short Circuit Operator
    return this.state.isLoggedIn && <div>Welcome Sreejith</div>;

    /*  Ternary Operator
    return this.state.isLoggedIn ? (
            <div>Welcome to Registed User</div>
        ) : (
            <div>Welcome to Guest</div>
        )
    
    */
   
    /* Element Variable
    let message;
    if(this.state.isLoggedIn){
        message = <div>Welcome to Registed User</div>
    }else{
        message = <div>Welcome to Guest</div>
    }

    return <div>{message}</div>
    */

    /* if-else
    if (this.state.isLoggedIn) {
      return <div>Welcome to Registed User</div>;
    } else {
      return <div>Welcome to Guest</div>;
    } 
    */
  }
}

export default UserGreeting;
