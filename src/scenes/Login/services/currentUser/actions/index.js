import { SET_CURRENT_USER } from "./types";

const USERS_URL = "http://localhost:3001/api/v1/users";
const LOGIN_URL = "http://localhost:3001/api/v1/login";
const PROFILE_URL = "http://localhost:3001/api/v1/users/profile";

function setCurrentUser({ user }) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

function createUser({ user }) {
  return dispatch => {
    return fetch(USERS_URL, {
      method: "POST",
      body: JSON.stringify({ user }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(r => r.json())
      .then(json => {
        localStorage.setItem("token", json.jwt);
        dispatch(setCurrentUser(json));
      });
  };
}

function loginUser({ user }) {
  return dispatch => {
    return fetch(LOGIN_URL, {
      method: "POST",
      body: JSON.stringify({ user }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(r => r.json())
      .then(json => {
        localStorage.setItem("token", json.jwt);
        dispatch(setCurrentUser(json));
      });
  };
}

function getCurrentUserFromToken() {
  return dispatch => {
    let token = localStorage.getItem("token");

    if (!token || token === "") {
      return;
    }

    return fetch(PROFILE_URL, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(r => r.json())
      .then(json => dispatch(setCurrentUser(json)));
  };
}

// Logging out does not occur within the login scene - it occurs within the HeaderMenu
// component.  Not yet sure how to move this functionality to that component folder.
// Will that change how my reducers/redux store would be set up?  Leaving here for now.
function logoutUser() {
  return dispatch => {
    localStorage.clear();
    dispatch(setCurrentUser(null));
  };
}

export { createUser, loginUser, getCurrentUserFromToken, logoutUser };
