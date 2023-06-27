import React, { Component } from "react";

class Welcome extends Component {
  render() {
    const { name, heroName } = this.props;   // const {state1, state2} = this.state
    return (
      <div>
        <h2>This is Class Component</h2>
        <h3>Destructuring Props Class Component</h3>
        <h1>
          Welcome {name} a.k.a {heroName}
        </h1>
      </div>
    );
  }
}

export default Welcome;
