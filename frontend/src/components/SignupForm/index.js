import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions } from "redux/moduels/user";

const mapDispatchToProps = dispatch => ({
  facebookLogin: access_token =>
    dispatch(userActions.facebookLogin(access_token)),
  createAccount: (username, password, email, name) =>
    dispatch(userActions.createAccount(username, password, email, name))
});

export default connect(null, mapDispatchToProps)(Container);
