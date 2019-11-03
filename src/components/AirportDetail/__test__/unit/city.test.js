import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import City from "../../City";
Enzyme.configure({ adapter: new Adapter() });

test("test city component", () => {
    const wrapper = shallow(
        <City
            city={{
                cityCode: "",
                cityName: "",
                timeZoneName: ""
            }}
        />
    );
    expect(wrapper.debug()).toMatchSnapshot();
});
