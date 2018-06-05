import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as photoActions } from "redux/moduels/photos";

const mapDispatchToProps = (dispatch, ownProps) => ({
  submitComment: message =>
    dispatch(photoActions.commentPhoto(ownProps.photoId, message))
});

export default connect(
  null,
  mapDispatchToProps
)(Container);
