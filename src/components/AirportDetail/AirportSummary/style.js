import styled, { keyframes } from "styled-components";
import { fadeInRight } from "react-animations";

export const AnimatedAirportSummary = styled.div`
    animation: ${keyframes`${fadeInRight}`} 0.7s;
`;
