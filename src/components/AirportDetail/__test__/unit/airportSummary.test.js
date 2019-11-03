import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AirportSummary from "../../AirportSummary";
Enzyme.configure({ adapter: new Adapter() });

test("test ariport Types component", () => {
    const wrapper = shallow(
        <AirportSummary
            summary={{
                airportName: "",
                airportCode: "",
                city: ""
            }}
        />
    );
    expect(wrapper.debug()).toMatchSnapshot();
});
