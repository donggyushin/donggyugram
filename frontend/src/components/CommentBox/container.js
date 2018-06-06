import React, { Component } from "react";
import CommentBox from "./presenter";

class Container extends Component {
  state = {
    comment: ""
  };
  render() {
    return (
      <CommentBox
        {...this.props}
        {...this.state}
        handleInputChange={this._handleInputChange}
        handleKeyPress={this._handleKeyPress}
      />
    );
  }

  _handleInputChange = event => {
    const {
      target: { value }
    } = event;
    console.log(value);
    this.setState({
      comment: value
    });
  };

  _handleKeyPress = event => {
    const { submitComment } = this.props;
    const { comment } = this.state;
    if (event.key === "Enter") {
      console.log(event.key);
      event.preventDefault();
      submitComment(comment);
      this.setState({
        comment: ""
      });
    }
  };
}

export default Container;
