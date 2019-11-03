import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Region from "../../Region";
Enzyme.configure({ adapter: new Adapter() });

describe("test Region component", () => {
    test("able to render props without crashing", () => {
        const wrapper = shallow(
            <Region region={{ regionCode: "regionCode", regionName: "regionName" }} />
        );
        expect(wrapper.find("[data-test='container']").length).toBe(1);
        expect(wrapper.find("h3").length).toBe(1);
        expect(wrapper.find("[data-test='regionCode']").text()).toBe("RegionCode: regionCode");
        expect(wrapper.find("[data-test='regionName']").text()).toBe("RegionName: regionName");
    });
});
