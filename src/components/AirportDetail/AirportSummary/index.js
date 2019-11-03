import React from "react";
import { AnimatedP } from "../style";
import { AnimatedAirportSummary } from "./style";
function index(props) {
    const { airportName, airportCode, city } = props.summary;
    return (
        <AnimatedAirportSummary>
            <h3>Airport Summary:</h3>
            <AnimatedP>AirportName: {airportName}</AnimatedP>
            <AnimatedP>AirportCode: {airportCode}</AnimatedP>
            <AnimatedP>CityName: {city.cityName}</AnimatedP>
        </AnimatedAirportSummary>
    );
}

export default index;
