import React from "react";
import { AnimatedP } from "../style";
import { AnimatedCountry } from "./style";
function index(props) {
    const { countryCode, countryName } = props.country;
    return (
        <AnimatedCountry>
            <h3>Country:</h3>
            <AnimatedP>CountryCode: {countryCode}</AnimatedP>
            <AnimatedP>CountryName: {countryName}</AnimatedP>
        </AnimatedCountry>
    );
}

export default index;
