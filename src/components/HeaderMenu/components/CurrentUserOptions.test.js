import React from "react";
import { shallow } from "enzyme";

import { CurrentUserOptions } from "./CurrentUserOptions/index";

describe("CurrentUserOptions", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<CurrentUserOptions />);

    expect(wrapper.find(".userOptions").length).toEqual(1);
  });

  xit("displays the logout icon when a currentUser is set", () => {
    let user = { email: "john@example.com" };
    let wrapper = shallow(<CurrentUserOptions currentUser={user} />);

    expect(wrapper.find(".logoutIcon").length).toEqual(1);
  });

  xit("displays the login icon when no currentUser is set", () => {
    let user = { email: "john@example.com" };
    let wrapper = shallow(<CurrentUserOptions currentUser={user} />);

    expect(wrapper.find(".loginIcon").length).toEqual(1);
  });
});
