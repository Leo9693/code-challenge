import React from "react";
import { AnimatedP } from "../style";
import { AnimatedLocation } from "./style";
function Location(props) {
    const {
        aboveSeaLevel,
        latitude,
        latitudeRadius,
        longitude,
        longitudeRadius,
        latitudeDirection,
        longitudeDirection
    } = props.location;
    return (
        <AnimatedLocation>
            <h3>Location:</h3>
            <AnimatedP>aboveSeaLevel: {aboveSeaLevel}</AnimatedP>
            <AnimatedP>latitude: {latitude}</AnimatedP>
            <AnimatedP>latitudeRadius: {latitudeRadius}</AnimatedP>
            <AnimatedP>longitude: {longitude}</AnimatedP>
            <AnimatedP>longitudeRadius: {longitudeRadius}</AnimatedP>
            <AnimatedP>latitudeDirection: {latitudeDirection}</AnimatedP>
            <AnimatedP>longitudeDirection: {longitudeDirection}</AnimatedP>
        </AnimatedLocation>
    );
}

export default Location;
