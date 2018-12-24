import React from "react";
import { shallow } from "enzyme";

import PasswordConfirmationInput from "./PasswordConfirmationInput/index";

describe("PasswordConfirmationInput", () => {
  it("renders correctly", () => {
    let wrapper = shallow(<PasswordConfirmationInput />);

    expect(wrapper.find(".PasswordConfirmationInput").length).toEqual(1);
  });

  it("matches its snapshot", () => {
    let wrapper = shallow(<PasswordConfirmationInput />);

    expect(wrapper).toMatchSnapshot();
  });
});
