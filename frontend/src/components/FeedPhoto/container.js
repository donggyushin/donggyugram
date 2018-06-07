import React from "react";
import FeedPhoto from "./presenter";

class Container extends React.Component {
  state = {
    seeingLikes: false
  };
  render() {
    return (
      <FeedPhoto
        {...this.props}
        {...this.state}
        openLikes={this._openLikes}
        closeLikes={this._closeLikes}
      />
    );
  }

  _openLikes = () => {
    this.setState({
      seeingLikes: true
    });
  };

  _closeLikes = () => {
    this.setState({
      seeingLikes: false
    });
  };
}

export default Container;
