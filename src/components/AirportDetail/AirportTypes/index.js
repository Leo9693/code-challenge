import React from "react";
import { TrueIcon, FalseIcon, FlexBox } from "./style";
import { AnimatedAirportTypes } from "./style";
function airportType(props) {
    const {
        internationalAirport,
        domesticAirport,
        regionalAirport,
        onlineIndicator,
        eticketableAirport
    } = props.types;

    return (
        <AnimatedAirportTypes>
            <h3>Airport types:</h3>
            <FlexBox>
                InternationalAirport
                {internationalAirport ? (
                    <TrueIcon>
                        <i className="fas fa-check"></i>
                    </TrueIcon>
                ) : (
                    <FalseIcon>
                        <i className="fas fa-times"></i>
                    </FalseIcon>
                )}
            </FlexBox>
            <FlexBox>
                DomesticAirport
                {domesticAirport ? (
                    <TrueIcon>
                        <i className="fas fa-check"></i>
                    </TrueIcon>
                ) : (
                    <FalseIcon>
                        <i className="fas fa-times"></i>
                    </FalseIcon>
                )}
            </FlexBox>
            <FlexBox>
                RegionalAirport
                {regionalAirport ? (
                    <TrueIcon>
                        <i className="fas fa-check"></i>
                    </TrueIcon>
                ) : (
                    <FalseIcon>
                        <i className="fas fa-times"></i>
                    </FalseIcon>
                )}
            </FlexBox>
            <FlexBox>
                OnlineIndicator
                {onlineIndicator ? (
                    <TrueIcon>
                        <i className="fas fa-check"></i>
                    </TrueIcon>
                ) : (
                    <FalseIcon>
                        <i className="fas fa-times"></i>
                    </FalseIcon>
                )}
            </FlexBox>
            <FlexBox>
                EticketableAirport
                {eticketableAirport ? (
                    <TrueIcon>
                        <i className="fas fa-check"></i>
                    </TrueIcon>
                ) : (
                    <FalseIcon>
                        <i className="fas fa-times"></i>
                    </FalseIcon>
                )}
            </FlexBox>
        </AnimatedAirportTypes>
    );
}

export default airportType;
