import styled, { keyframes } from "styled-components";
import { fadeInRight } from "react-animations";

export const AnimatedCountry = styled.div`
    animation: ${keyframes`${fadeInRight}`} 1.6s;
`;
