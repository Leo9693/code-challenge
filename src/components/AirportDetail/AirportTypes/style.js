import styled, { keyframes } from "styled-components";
import { fadeInRight } from "react-animations";
export const FalseIcon = styled.span`
    padding: 5px;
    border-radius: 5px;
    color: red;
`;

export const TrueIcon = styled.span`
    padding: 5px;
    border-radius: 5px;
    color: green;
`;

export const FlexBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s
    cursor:pointer
    &:hover {
        transform: scale(1.5);
        padding: 0 10px;
        border-radius: 20px;
        background-color: rgba(243, 181, 11, 0.6);
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
        & > span {
            background-color: rgba(243, 181, 11);
        }
    }
`;

export const AnimatedP = styled.p`
    transition: all 1s
    &:hover {
        transform: scale(1.1);
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
    }
`;
export const AnimatedAirportTypes = styled.div`
    animation: ${keyframes`${fadeInRight}`} 0.9s;
`;
