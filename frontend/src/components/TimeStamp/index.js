import PropTypes from "prop-types";
import styles from "./styles.scss";
import React from "react";

const TimeStamp = (props, context) => (
  <span className={styles.time}>{props.time}</span>
);

TimeRanges.propTypes = {
  time: PropTypes.string.isRequired
};

export default TimeStamp;
