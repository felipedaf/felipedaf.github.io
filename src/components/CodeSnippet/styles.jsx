import styled, { keyframes } from "styled-components";
import colors from "../../colors";

const blink = keyframes`
  0% {
    opacity: 0;
  }

  50% {
    opacity: 0;
  }
  51% {
    opacity: 75%;
  }

  100% {
    opacity: 75%;
  }
`;

export const Wrapper = styled.div`
  padding: 30px 20px;
  font-size: 0.95rem;
  font-weight: 200;
  line-height: 1.3rem;
  background: linear-gradient(
    45deg,
    rgba(2, 0, 36, 0) 15%,
    rgba(0, 52, 89, 1) 100%
  );
  width: fit-content;
  min-width: 250px;
`;

export const NoWrap = styled.span`
  white-space: nowrap;
`;

export const InsideProps = styled.div`
  margin-left: 15px;
`;

export const Normal = styled.span`
  color: ${({ color }) => colors[color || "light"]};
  opacity: 90%;
`;

export const TextEditor = styled.div`
  width: 6px;
  height: 1rem;
  background: ${colors.light};
  opacity: 75%;
  margin-left: 2px;
  display: inline-block;
  top: 4px;
  position: relative;
  animation-delay: ${({ delay }) => (delay ? "-0.8s" : "-0.2s")};
  animation: ${blink} 0.8s linear infinite;
`;
