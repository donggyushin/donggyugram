import React, { Component } from "react";
import CommentBox from "./presenter";

class Container extends Component {
  render() {
    return <CommentBox {...this.props} />;
  }
}

export default Container;
