import styled, { keyframes } from "styled-components";
import { pulstate } from "../../animations/customizedAnimation";
import { fadeInLeft } from "react-animations";
import { Card } from "react-bootstrap";
export const StyledBox = styled.div`
    padding: 0.75rem 1.25rem;
    border: 1px solid rgba(0, 0, 0, 0.125);
    background-color: white;
    display: block;
    border-radius: 0.25rem;
    height: 100%;
    transition: all 0.5s;
    &:hover {
        background: lightblue;
    }
`;

export const AnimatedCard = styled(Card)`
    animation: ${keyframes`${fadeInLeft}`} 0.5s;
`;

export const AnimatedStrong = styled.strong`
    color: white;
    padding: 0.5rem 1rem;
    margin: 0 0.5rem;
    border-radius: 20px;
    background-image: linear-gradient(to bottom, #ffb369 0, #ff4272);
    animation: ${keyframes`${pulstate}`} 1s infinite;
    &:hover {
        cursor: pointer;
    }
`;

export const AnimatedP = styled.p`
    transition: all 0.3s;
    &:hover {
        cursor: pointer;
        transform: scale(1.3);
        padding: 0 10px;
        border-radius: 20px;
        background-color: rgba(243, 181, 11, 0.6);
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
    }
`;
