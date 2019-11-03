import styled, { keyframes } from "styled-components";
import { Button } from "react-bootstrap";
import { fadeInLeft, fadeInRight } from "react-animations";
export const FlexBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 2rem;
    transition: all 1s;
    a {
        color: black;
        font-weight: 200;
        &:hover {
            text-decoration: none;
        }
        & h443 {
            font-weight: 300;
        }
    }
    @media (max-width: 768px) {
        font-size: 1.3rem;
    }
`;

export const Icon = styled.i`
    padding: 1rem;
    &:hover {
        cursor: pointer;
    }
`;

export const AnimatedBox = styled.div`
    animation: ${keyframes`${fadeInLeft}`} 0.6s;
`;

export const AnimatedButton = styled(Button)`
    animation: ${keyframes`${fadeInRight}`} 0.6s;
`;
