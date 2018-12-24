import React from "react";
import { shallow } from "enzyme";

import { LogoutIcon } from "./LogoutIcon/index";

describe("LogoutIcon", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<LogoutIcon />);

    expect(wrapper.find(".logoutIcon").length).toEqual(1);
  });

  it("matches its snapshot", () => {
    const wrapper = shallow(<LogoutIcon />);

    expect(wrapper).toMatchSnapshot();
  });
});
