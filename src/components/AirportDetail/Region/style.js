import styled, { keyframes } from "styled-components";
import { fadeInRight } from "react-animations";

export const AnimatedRegion = styled.div`
    animation: ${keyframes`${fadeInRight}`} 1.8s;
`;
