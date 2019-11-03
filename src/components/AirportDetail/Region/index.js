import React from "react";
import { AnimatedP } from "../style";
import { AnimatedRegion } from "./style";
function index(props) {
    const { regionCode, regionName } = props.region;
    return (
        <AnimatedRegion data-test="container">
            <h3>Region:</h3>
            <AnimatedP data-test="regionCode">RegionCode: {regionCode}</AnimatedP>
            <AnimatedP data-test="regionName">RegionName: {regionName}</AnimatedP>
        </AnimatedRegion>
    );
    // return(
    //     <div className="container" data-test="container">
    //         <h3></h3>
    //     </div>
    // )
}

export default index;
