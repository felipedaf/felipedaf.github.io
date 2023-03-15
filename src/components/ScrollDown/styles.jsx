import styled, { keyframes } from "styled-components";

const topDownAnimation = keyframes`
    0% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(10px);
    }

    100% {
        transform: translateY(0px)
    }
`;

const showAndHide = keyframes`
    0% {
        opacity: 0;
    }

    10% {
        opacity: 0.6;
    }

    90% {
        opacity: 0.6;
    }

    100% {
        opacity: 0;
    }
`;

export const Wrapper = styled.div`
  position: fixed;
  z-index: 100;
  color: blue;
  width: 70px;
  height: auto;
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  top: calc(100vh - 120px);
  left: calc(50vw - 35px);
  opacity: 0;
  animation-name: ${showAndHide};
  animation-duration: 6s;
`;

export const Span = styled.span`
  color: rgb(0, 168, 232);
`;

export const ArrowImage = styled.img`
  width: 40px;
  animation-name: ${topDownAnimation};
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
`;
