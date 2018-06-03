//import

import { actionCreators as userActions } from "./user";

//actions

const SET_FEED = "SET_FEED";

//action creators

function setFeed(feed) {
  return {
    type: SET_FEED,
    feed
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

//initial state
const initialState = {
  feed: []
};

//reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_FEED:
      return applySetFeed(state, action);
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

//export actions

const actionCreators = {
  getFeed
};

export { actionCreators };

//export reducer

export default reducer;
