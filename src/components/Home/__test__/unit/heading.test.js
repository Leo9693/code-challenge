import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Heading from "../../Heading";
Enzyme.configure({ adapter: new Adapter() });

test("test ariport Types component", () => {
    const wrapper = shallow(<Heading />);
    expect(wrapper.debug()).toMatchSnapshot();
});
