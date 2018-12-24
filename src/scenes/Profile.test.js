import React from "react";
import { shallow } from "enzyme";

import Profile from "./Profile/index";

describe("Profile", () => {
  it("renders correctly", () => {
    let wrapper = shallow(<Profile />);

    expect(wrapper.find(".Profile").length).toEqual(1);
  });

  it("matches its snapshot", () => {
    let wrapper = shallow(<Profile />);

    expect(wrapper).toMatchSnapshot();
  });
});
