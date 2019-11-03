import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Heading from "./index";
Enzyme.configure({ adapter: new Adapter() });

test("renders without crashing", () => {
    const wrapper = mount(<Heading />);
    expect(wrapper).toMatchSnapshot();
    // expect(wrapper.find("[data-test='container']").length).toBe(1);
});
