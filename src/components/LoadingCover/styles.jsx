import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  z-index: 100;
`;

export const PieceWrapper = styled.div`
  width: max(100vh, 100vw);
  height: max(100vh, 100vw);
  background: green;
  display: flex;
`;

export const TopLeftPiece = styled.div`
  background: blue;
  height: 100%;
  width: 50%;
`;

export const BottomRightPiece = styled.div`
  background-color: red;
  height: 100%;
  width: 50%;
`;
