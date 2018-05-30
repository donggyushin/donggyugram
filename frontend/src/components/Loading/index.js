import React from "react";
import styles from "./styles.scss";

const Loading = props => (
  <div className={styles.container}>
    <img
      src={require("images/Loading.png")}
      className={styles.spinner}
      alt="loading"
    />
  </div>
);

export default Loading;
