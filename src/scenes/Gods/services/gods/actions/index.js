const GODS_URL = "http://localhost:3001/api/v1/gods";

function setGods({ gods }) {
  return {
    type: SET_GODS,
    gods
  };
}

function getGods() {
  return dispatch => {
    return fetch(GODS_URL)
      .then(r => r.json)
      .then(gods => {
        dispatch(setGods({ gods }));
      });
  };
}

export { GODS_URL, setGods, getGods };
