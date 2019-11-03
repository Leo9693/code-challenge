import React from "react";
import { AnimatedP } from "../style";
import { AnimatedRegion } from "./style";
function index(props) {
    const { regionCode, regionName } = props.region;
    return (
        <AnimatedRegion>
            <h3>Region:</h3>
            <AnimatedP>RegionCode: {regionCode}</AnimatedP>
            <AnimatedP>RegionName: {regionName}</AnimatedP>
        </AnimatedRegion>
    );
}

export default index;
