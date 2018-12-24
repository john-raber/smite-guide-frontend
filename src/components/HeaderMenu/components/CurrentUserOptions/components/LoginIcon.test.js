import React from "react";
import { shallow } from "enzyme";

import LoginIcon from "./LoginIcon/index";

describe("LoginIcon", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<LoginIcon />);

    expect(wrapper.find(".loginIcon").length).toEqual(1);
  });

  it("matches its snapshot", () => {
    const wrapper = shallow(<LoginIcon />);

    expect(wrapper).toMatchSnapshot();
  });
});
