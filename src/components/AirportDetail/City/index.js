import React from "react";
import { AnimatedP } from "../style";
import { AnimatedCity } from "./style";
function index(props) {
    const { cityCode, cityName, timeZoneName } = props.city;
    return (
        <AnimatedCity>
            <h3>City:</h3>
            <AnimatedP>CityCode: {cityCode}</AnimatedP>
            <AnimatedP>CityName: {cityName}</AnimatedP>
            <AnimatedP>TimeZoneName: {timeZoneName}</AnimatedP>
        </AnimatedCity>
    );
}

export default index;
