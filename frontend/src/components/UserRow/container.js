import React from "react";
import UserRow from "./presenter";

class Container extends React.Component {
  render() {
    return <UserRow {...this.props} />;
  }
}

export default Container;
