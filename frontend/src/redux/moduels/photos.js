//import

import { actionCreators as userActions } from "./user";

//actions

const SET_FEED = "SET_FEED";
const LIKE_PHOTO = "LIKE_PHOTO";
const UNLIKE_PHOTO = "UNLIKE_PHOTO";

//action creators

function setFeed(feed) {
  return {
    type: SET_FEED,
    feed
  };
}

function doLikePhoto(photoId) {
  return {
    type: LIKE_PHOTO,
    photoId
  };
}

function doUnlikePhoto(photoId) {
  return {
    type: UNLIKE_PHOTO,
    photoId
  };
}

//api actions

function getFeed() {
  return (dispatch, getState) => {
    const {
      user: { token }
    } = getState();
    fetch("/images/", {
      method: "get",
      headers: {
        Authorization: `JWT ${token}`
      }
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(userActions.logout());
        }
        return response.json();
      })
      .then(json => dispatch(setFeed(json)));
  };
}

function likePhoto(photoId) {
  return (dispatch, getState) => {
    const {
      user: { token }
    } = getState();
    dispatch(doLikePhoto(photoId));
    fetch(`/images/${photoId}/likes/`, {
      method: "post",
      headers: {
        Authorization: `JWT ${token}`
      }
    }).then(response => {
      if (response.status === 401) {
        dispatch(userActions.logout());
      } else if (!response.ok) {
        dispatch(doUnlikePhoto(photoId));
      }
    });
  };
}

function unlikePhoto(photoId) {
  return (dispatch, getState) => {
    const {
      user: { token }
    } = getState();
    dispatch(doUnlikePhoto(photoId));
    fetch(`/images/${photoId}/unlikes/`, {
      method: "delete",
      headers: {
        Authorization: `JWT ${token}`
      }
    }).then(response => {
      if (response.status === 401) {
        dispatch(userActions.logout());
      } else if (!response.ok) {
        dispatch(doLikePhoto(photoId));
      }
    });
  };
}

function commentPhoto(photoId, message) {
  return (dispatch, getState) => {
    const {
      user: { token }
    } = getState();

    fetch(`/images/${photoId}/comments/`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${token}`
      },
      body: JSON.stringify({ message })
    }).then(response => {
      if (response.status === 401) {
        dispatch(userActions.logout());
      }
    });
  };
}

//initial state
const initialState = {};

//reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_FEED:
      return applySetFeed(state, action);
    case LIKE_PHOTO:
      return applyLikePhoto(state, action);
    case UNLIKE_PHOTO:
      return applyUnlikePhoto(state, action);
    default:
      return state;
  }
}

//reducer function

function applySetFeed(state, action) {
  const { feed } = action;
  return {
    ...state,
    feed
  };
}

function applyLikePhoto(state, action) {
  const { photoId } = action;
  const { feed } = state;
  const updatedFeed = feed.map(photo => {
    if (photo.id === photoId) {
      return { ...photo, is_liked: true, like_count: photo.like_count + 1 };
    } else return photo;
  });
  return { ...state, feed: updatedFeed };
}

function applyUnlikePhoto(state, action) {
  const { photoId } = action;
  const { feed } = state;
  const updatedFeed = feed.map(photo => {
    if (photo.id === photoId) {
      return { ...photo, is_liked: false, like_count: photo.like_count - 1 };
    } else return photo;
  });
  return { ...state, feed: updatedFeed };
}

//export actions

const actionCreators = {
  getFeed,
  unlikePhoto,
  likePhoto,
  commentPhoto
};

export { actionCreators };

//export reducer

export default reducer;
