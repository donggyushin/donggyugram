import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions } from "redux/moduels/user";

const mapStateToProps = state => {
  const {
    user: { imageList, userList },
    routing: { location }
  } = state;
  return {
    imageList,
    userList,
    location
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const {
    match: {
      params: { searchTerm }
    }
  } = ownProps;
  return {
    searchByTerm: () => dispatch(userActions.searchByTerm(searchTerm))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
