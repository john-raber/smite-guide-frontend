import currentUserReducer from "./reducer";
import * as types from "./actions/types";

describe("currentUserReducer", () => {
  it("should return the initial state", () => {
    expect(currentUserReducer(undefined, {})).toEqual(null);
  });

  it("should handle 'SET_CURRENT_USER'", () => {
    const user = { email: "john@example.com" };

    expect(
      currentUserReducer(undefined, { type: types.SET_CURRENT_USER, user })
    ).toEqual(user);
  });
});
