import styled, { keyframes } from "styled-components";
import { fadeInRight } from "react-animations";

export const AnimatedCity = styled.div`
    animation: ${keyframes`${fadeInRight}`} 1.3s;
`;
