import React from "react";
import { shallow } from "enzyme";

import { LoginForm } from "./LoginForm/index";

describe("LoginForm", () => {
  it("renders correctly", () => {
    let wrapper = shallow(<LoginForm />);

    expect(wrapper.find(".LoginForm").length).toEqual(1);
  });

  it("matches its snapshot", () => {
    let wrapper = shallow(<LoginForm />);

    expect(wrapper).toMatchSnapshot();
  });
});
