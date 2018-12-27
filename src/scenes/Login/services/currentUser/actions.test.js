import * as actions from "./actions/index";
import * as types from "./actions/types";

describe("actions", () => {
  it("should create an action to set the current user", () => {
    const user = { email: "john@example.com" };
    const expectedAction = {
      type: types.SET_CURRENT_USER,
      user
    };

    expect(actions.setCurrentUser({ user })).toEqual(expectedAction);
  });
});
