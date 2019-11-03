import styled, { keyframes } from "styled-components";
import { fadeInRight } from "react-animations";

export const AnimatedLocation = styled.div`
    animation: ${keyframes`${fadeInRight}`} 1.1s;
`;
