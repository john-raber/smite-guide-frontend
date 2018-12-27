import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";

import * as actions from "./actions/index";
import * as types from "./actions/types";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

let token;

describe("async actions", () => {
  afterEach(() => {
    localStorage.clear();
    fetchMock.restore();
  });

  const user = { email: "john@example.com", password: "hi" };

  it("creates a new user", () => {
    fetchMock.postOnce(actions["USERS_URL"], {
      body: { user },
      headers: {
        "content-type": "application/json",
        accept: "application/json"
      }
    });

    const expectedActions = [{ type: types.SET_CURRENT_USER, user }];
    const store = mockStore({ currentUser: null });

    return store.dispatch(actions.createUser({ user })).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("logs a user in", () => {
    fetchMock.postOnce(actions["LOGIN_URL"], {
      body: { user },
      headers: {
        "content-type": "application/json",
        accept: "application/json"
      }
    });

    const expectedActions = [{ type: types.SET_CURRENT_USER, user }];
    const store = mockStore({ currentUser: null });

    return store.dispatch(actions.loginUser({ user })).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  xit("keeps the current user logged in", () => {
    fetchMock.getOnce(actions["PROFILE_URL"], {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  });

  xit("logs a user out", () => {
    const expectedActions = [{ type: types.SET_CURRENT_USER }];
    const store = mockStore({ currentUser: null });

    return store.dispatch(actions.logoutUser()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
