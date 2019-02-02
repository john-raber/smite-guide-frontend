import React from "react";
import { shallow } from "enzyme";

import GodCard from "./GodCard/index";

describe("GodCard", () => {
  xit("renders correctly", () => {
    let wrapper = shallow(<GodCard />);

    expect(wrapper.find(".GodCard").length).toEqual(1);
  });

  xit("matches its snapshot", () => {
    let wrapper = shallow(<GodCard />);

    expect(wrapper).toMatchSnapshot();
  });
});
