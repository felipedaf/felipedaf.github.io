import styled from "styled-components";
import colors from "../../colors";

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
