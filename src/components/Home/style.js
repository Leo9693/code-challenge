import styled, { keyframes } from "styled-components";
import { Alert } from "react-bootstrap";
import { fadeInDown } from "react-animations";


export const AnimatedAlert = styled(Alert)`
    animation: ${keyframes`${fadeInDown}`} 0.6s ease-in-out;
`;
