import PropTypes from "prop-types";
import styles from "./styles.scss";
import React from "react";

const TimeStamp = (props, context) => props.time;

TimeRanges.propTypes = {
  time: PropTypes.string.isRequired
};

export default TimeStamp;
