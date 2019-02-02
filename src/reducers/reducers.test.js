import reducers from "./index";

describe("reducers", () => {
  it("should return the initial state", () => {
    expect(reducers(undefined, {})).toEqual({ currentUser: null, gods: [] });
  });
});
