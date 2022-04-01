import styled, { css } from "styled-components";
import colors from "../../colors";

export const Wrapper = styled.div`
  margin-top: 50px;
  width: 100%;
  min-height: 200px;
  border-left: 1px rgba(128, 128, 128, 0.75) solid;
  display: flex;
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentContainer = styled.p`
  flex-grow: 1;
  height: 400px;
  overflow-y: auto;
  font-weight: 100;
  font-size: 0.95rem;
  color: ${colors.light};
  padding: 0 10px;
  white-space: pre-wrap;
  text-align: justify;
  scrollbar-width: thin;
  scrollbar-color: ${colors.lightBlue} transparent;
  ::-webkit-scrollbar {
    width: 2px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${colors.lightBlue};
  }
`;

export const SelectOption = styled.button`
  position: relative;
  border: none;
  ${({ chose }) =>
    chose
      ? css`
          background: rgba(128, 128, 128, 0.05);
          color: ${colors.lightBlue};
        `
      : css`
          background: transparent;
          color: rgba(128, 128, 128, 0.75);
        `}
  padding: 10px 20px;
  font-weight: 100;
  font-size: 0.95rem;
  width: 100%;
  min-width: 80px;
  transition: background 0.2s;

  &:hover {
    background: rgba(128, 128, 128, 0.05);
  }
`;
