import Container from "./container";
import { connect } from "react-redux";
import { push } from "react-router-redux";

const mapDispatchToProps = dispatch => ({
  goToSearch: searchTerm => dispatch(push(`/search/${searchTerm}`))
});

export default connect(
  null,
  mapDispatchToProps
)(Container);
