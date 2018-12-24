import React from "react";
import { shallow } from "enzyme";

import { HeaderMenu } from "./HeaderMenu/index";

describe("HeaderMenu", () => {
  it("renders correctly", () => {
    let wrapper = shallow(<HeaderMenu />);

    expect(wrapper.find(".headerMenu").length).toEqual(1);
  });

  it("matches its snapshot when a currentUser is set", () => {
    let user = { email: "john@example.com" };
    let wrapper = shallow(<HeaderMenu currentUser={user} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("matches its snapshot when no currentUser is set", () => {
    let wrapper = shallow(<HeaderMenu />);

    expect(wrapper).toMatchSnapshot();
  });
});
