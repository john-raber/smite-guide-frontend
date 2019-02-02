import React from "react";
import { shallow } from "enzyme";

import GodList from "./GodList/index";

describe("GodList", () => {
  xit("renders correctly", () => {
    let wrapper = shallow(<GodList />);

    expect(wrapper.find(".GodList").length).toEqual(1);
  });

  xit("matches its snapshot", () => {
    let wrapper = shallow(<GodList />);

    expect(wrapper).toMatchSnapshot();
  });
});
