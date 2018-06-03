import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as photoActions } from "../../redux/moduels/photos";

const mapStateToProps = state => {
  const {
    photos: { feed }
  } = state;
  return {
    feed
  };
};

const mapDispatchToProps = dispatch => ({
  getFeed: () => {
    dispatch(photoActions.getFeed());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
