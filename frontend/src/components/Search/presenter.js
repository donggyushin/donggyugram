import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import Loading from "components/Loading";

const Search = props => {
  if (props.loading) {
    return <LoadingSearch />;
  }
};

const LoadingSearch = props => (
  <div className={styles.search}>
    <Loading />
  </div>
);

Search.propTypes = {
  loading: PropTypes.bool.isResquired
};

export default Search;
