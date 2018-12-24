import React from "react";
import { shallow } from "enzyme";

import EmailInput from "./EmailInput/index";

describe("EmailInput", () => {
  it("renders correctly", () => {
    let wrapper = shallow(<EmailInput />);

    expect(wrapper.find(".EmailInput").length).toEqual(1);
  });

  it("matches its snapshot", () => {
    let wrapper = shallow(<EmailInput />);

    expect(wrapper).toMatchSnapshot();
  });
});
