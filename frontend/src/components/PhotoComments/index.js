import React from "react";
import styles from "./styles.scss";
import PropTypes from "prop-types";

const PhotoComments = props => (
  <div className={styles.comments}>
    <ul className={styles.list}>
      <Comment username={props.creator} comment={props.caption} />
      {props.comments.map(comment => (
        <Comment
          username={comment.creator.username}
          comment={comment.message}
          key={comment.id}
        />
      ))}
    </ul>
  </div>
);

const Comment = props => (
  <li>
    <span className={styles.username}>{props.username}</span>{" "}
    <span>{props.comment}</span>
  </li>
);

PhotoComments.propTypes = {
  caption: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      creator: PropTypes.shape({
        profile_image: PropTypes.string,
        username: PropTypes.string.isRequired
      }).isRequired,
      message: PropTypes.string.isRequired
    })
  ).isRequired,
  creator: PropTypes.string.isRequired
};

export default PhotoComments;
