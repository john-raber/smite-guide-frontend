import React from "react";
import { shallow } from "enzyme";

import { About } from "./About/index";

describe("About", () => {
  it("renders correctly", () => {
    let wrapper = shallow(<About />);

    expect(wrapper.find(".About").length).toEqual(1);
  });

  it("matches its snapshot", () => {
    let wrapper = shallow(<About />);

    expect(wrapper).toMatchSnapshot();
  });
});
