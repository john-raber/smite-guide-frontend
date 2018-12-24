import React from "react";
import { shallow } from "enzyme";

import GuideList from "./GuideList/index";

describe("GuideList", () => {
  xit("renders correctly", () => {
    let wrapper = shallow(<GuideList />);

    expect(wrapper.find(".GuideList").length).toEqual(1);
  });

  xit("matches its snapshot", () => {
    let wrapper = shallow(<GuideList />);

    expect(wrapper).toMatchSnapshot();
  });
});
