import styled, { keyframes } from "styled-components";
import { zoomIn } from "react-animations";
export const Heading = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 2rem;
    color: white;
    padding: 2rem 0;
    transition: all 1s;
    animation: ${keyframes`${zoomIn}`} 0.6s ease-in-out;
    img {
        max-width: 200px;
        display: block;
        &:hover {
            cursor: pointer;
        }
    }
    @media (max-width: 768px) {
        flex-direction: column;
        font-size: 1.3rem;
        & > h4 {
            margin-top: 1rem;
        }
    }
    @media (max-width: 576px) {
        flex-direction: column;
        font-size: 1.1rem;
    }
`;
