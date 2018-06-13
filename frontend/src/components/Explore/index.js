import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions } from "../../redux/moduels/user";

const mapStateToProps = state => {
  const {
    user: { userList }
  } = state;
  return {
    userList
  };
};

const mapDispatchToProps = dispatch => ({
  getExplore: () => {
    dispatch(userActions.getExplore());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
