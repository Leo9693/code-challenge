import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Location from "../../Location";
Enzyme.configure({ adapter: new Adapter() });

test("test location Types component", () => {
    const wrapper = shallow(
        <Location
            location={{
                aboveSeaLevel: "",
                latitude: "",
                latitudeRadius: "",
                longitude: "",
                longitudeRadius: "",
                latitudeDirection: "",
                longitudeDirection: ""
            }}
        />
    );
    expect(wrapper.debug()).toMatchSnapshot();
});
