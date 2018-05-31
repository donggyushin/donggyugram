import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as photoActions } from "../../redux/moduels/photos";

const mapDispatchToProps = dispatch => ({
  getFeed: () => dispatch(photoActions.getFeed())
});

export default connect(null, mapDispatchToProps)(Container);
