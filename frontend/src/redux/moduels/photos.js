//import

//actions

//action creators

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
      .then(response => response.json())
      .then(json => console.log(json));
  };
}

//initial state
const initialState = {};

//reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

//reducer function

//export actions

const actionCreators = {
  getFeed
};

export { actionCreators };

//export reducer

export default reducer;
