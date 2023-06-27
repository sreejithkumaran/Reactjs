import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      comments: "",
      topic: "react",
    };
  }

  handleUserNameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handleCommentChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
    event.preventDefault(); // Prevents the page from re-loading. Keeps the forms value in-tact
  };
  render() {
    const { username, comments, topic } = this.state; // -> b
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Form Component</h2>
        <div>
          <label> User Name : </label>
          <input
            type="text"
            // value={this.state.username} -> a
            value={username} // -> b
            onChange={this.handleUserNameChange}
          />
        </div>
        <div>
          <label> Comment : </label>
          <textarea
            // value={this.state.comments} -> a
            value={comments} // -> b
            onChange={this.handleCommentChange}
          ></textarea>
        </div>
        <div>
          <label> Topic : </label>
          <select
            // value={this.state.topic}  -> a
            value={this.state.topic} // -> b
            onChange={this.handleTopicChange}
          >
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }
}

export default Form;
