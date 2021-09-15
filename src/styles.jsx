import styled from "styled-components";
import colors from "./colors";

export const Wrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-color: ${colors.dark};
`;

export const ContentContainer = styled.div`
  max-width: 1000px;
  height: 100vh;
  margin: auto;
`;
