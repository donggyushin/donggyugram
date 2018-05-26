import React, { Component } from "react";
import LoginForm from "./presenter";

class Container extends Component {
  state = {
    username: "",
    password: ""
  };

  render() {
    const { username, password } = this.state;
    return (
      <LoginForm
        usernameValue={username}
        passwordValue={password}
        handleInputChange={this._handleInputChange}
        handleSubmit={this._handleSubmit}
        responseFacebook={this._responseFacebook}
      />
    );
  }

  _handleInputChange = event => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    console.log(name, value);

    this.setState({
      [name]: value
    });
  };

  _handleSubmit = event => {
    event.preventDefault();
  };

  _responseFacebook = response => {
    console.log(response);
  };
}

export default Container;
