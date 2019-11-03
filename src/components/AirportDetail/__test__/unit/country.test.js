import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Country from "../../Country";
Enzyme.configure({ adapter: new Adapter() });

test("test country component", () => {
    const wrapper = shallow(
        <Country
            country={{
                countryCode: "",
                countryName: ""
            }}
        />
    );
    expect(wrapper.debug()).toMatchSnapshot();
});
