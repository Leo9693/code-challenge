import React from "react";
import { AnimatedP } from "../style";
import { AnimatedAirportSummary } from "./style";
function index(props) {
    const { airportName, airportCode, city } = props.summary;
    return (
        <AnimatedAirportSummary data-test="container">
            <h3>Airport Summary:</h3>
            <AnimatedP data-test="airportName">AirportName: {airportName}</AnimatedP>
            <AnimatedP data-test="airportCode">AirportCode: {airportCode}</AnimatedP>
            <AnimatedP data-test="city">CityName: {city.cityName}</AnimatedP>
        </AnimatedAirportSummary>
    );
}

export default index;
