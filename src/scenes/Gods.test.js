import React from "react";
import { shallow } from "enzyme";

import { Gods } from "./Gods/index";

describe("Gods", () => {
  xit("renders correctly", () => {
    let wrapper = shallow(<Gods />);

    expect(wrapper.find(".Gods").length).toEqual(1);
  });

  xit("matches its snapshot", () => {
    let wrapper = shallow(<Gods />);

    expect(wrapper).toMatchSnapshot();
  });
});
