import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AirportTypes from "../../AirportTypes";
Enzyme.configure({ adapter: new Adapter() });

test("test ariport Types component", () => {
    const wrapper = shallow(
        <AirportTypes
            types={{
                internationAirport: "",
                domesticAirport: "",
                regionalAirport: "",
                onlineIndicator: "",
                eticketableAirport: ""
            }}
        />
    );
    expect(wrapper.debug()).toMatchSnapshot();
});
