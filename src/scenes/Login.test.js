import React from "react";
import { shallow } from "enzyme";

import { Login } from "./Login/index";

describe("Login", () => {
  it("renders correctly", () => {
    let wrapper = shallow(<Login />);

    expect(wrapper.find(".Login").length).toEqual(1);
  });

  it("matches its snapshot", () => {
    let wrapper = shallow(<Login />);

    expect(wrapper).toMatchSnapshot();
  });
});
