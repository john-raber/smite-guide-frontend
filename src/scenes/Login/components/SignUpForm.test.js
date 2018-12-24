import React from "react";
import { shallow } from "enzyme";

import { SignUpForm } from "./SignUpForm/index";

describe("SignUpForm", () => {
  it("renders correctly", () => {
    let wrapper = shallow(<SignUpForm />);

    expect(wrapper.find(".SignUpForm").length).toEqual(1);
  });

  it("matches its snapshot", () => {
    let wrapper = shallow(<SignUpForm />);

    expect(wrapper).toMatchSnapshot();
  });
});
