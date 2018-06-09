import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions } from "redux/moduels/user";

const mapDispatchToProps = (dispatch, ownProps) => ({
  getPhotoLikes: () => dispatch(userActions.getPhotoLikes(ownProps.id))
});

export default connect(
  null,
  mapDispatchToProps
)(Container);
