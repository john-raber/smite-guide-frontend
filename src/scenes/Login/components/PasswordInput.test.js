import React from "react";
import { shallow } from "enzyme";

import PasswordInput from "./PasswordInput/index";

describe("PasswordInput", () => {
  it("renders correctly", () => {
    let wrapper = shallow(<PasswordInput />);

    expect(wrapper.find(".PasswordInput").length).toEqual(1);
  });

  it("matches its snapshot", () => {
    let wrapper = shallow(<PasswordInput />);

    expect(wrapper).toMatchSnapshot();
  });
});
