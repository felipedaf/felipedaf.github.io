import styled, { css, keyframes } from "styled-components";

const animationDelayInSeconds = 1;
const animationDurationInSeconds = 1;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const zIndexChaging = keyframes`
  0% {
    z-index: 100;
  }

  100% {
    z-index: 0;
  }
`;

const hide = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

export const PieceWrapper = styled.div`
  width: calc(max(100vh, 100vw) * 2);
  height: calc(max(100vh, 100vw) * 2);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: rotate(-45deg);
  z-index: 100;
  ${({ isComplete }) =>
    isComplete &&
    css`
      animation: ${zIndexChaging}
        ${animationDelayInSeconds + animationDurationInSeconds + 0.1}s linear
        forwards;
    `}
`;

const openTopLeftPiece = keyframes`
  from {
    transform: translateY(-1%);
  }

  to {
    transform: translateY(100%);
  }
`;

const openBottomRightPiece = keyframes`
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(-100%);
  }
`;

export const TopLeftPiece = styled.div`
  background: rgb(0, 52, 89);
  height: 50%;
  width: 200%;
  position: absolute;
  ${({ isComplete }) =>
    isComplete
      ? css`
          animation: ${openTopLeftPiece} ${animationDurationInSeconds}s
            ease-in-out forwards;
        `
      : ""}
  bottom: 1px;
  border: 1px solid rgb(0, 168, 232);
  animation-delay: ${animationDelayInSeconds}s;
`;

export const BottomRightPiece = styled.div`
  background-color: rgb(0, 52, 89);
  height: 50%;
  width: 200%;
  position: absolute;

  ${({ isComplete }) =>
    isComplete
      ? css`
          animation: ${openBottomRightPiece} ${animationDurationInSeconds}s
            ease-in-out forwards;
        `
      : ""}
  animation-delay: ${animationDelayInSeconds}s;
  top: 0;
  border: 1px solid rgb(0, 168, 232);
`;

export const LoadingText = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: max(15vw, 15vh);
  height: max(15vw, 15vh);
  max-width: 200px;
  max-height: 200px;
  font-size: 1.8rem;
  color: rgb(0, 168, 232);
  font-weight: 100;
  z-index: 100;
  padding: 30px;
  border-radius: 50%;
  background-color: rgb(0, 52, 89);
  transform: rotate(45deg);
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1/1;
  border: 1px solid rgb(0, 168, 232);
  animation-delay: ${animationDelayInSeconds}s;
  ${({ isComplete }) =>
    isComplete &&
    css`
      animation: ${zIndexChaging} 1s ease-in-out forwards,
        ${hide} 1s ease-in-out forwards;
    `}
`;
