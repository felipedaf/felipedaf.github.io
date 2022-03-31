import styled from "styled-components";
import colors from "../../colors";

export const Wrapper = styled.div`
  ${(props) =>
    props.shifted &&
    css`
      padding-left: 50px;
    `}

  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 100%;
`;

export const ContainerDiv = styled.div``;

export const ExpansibleDiv = styled.div`
  flex-grow: 1;
  display: grid;
`;

export const SectionTitle = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: ${colors.light};
  opacity: 0.75;
  display: flex;
  word-break: keep-all;
`;

export const SectionNumber = styled.span`
  color: ${colors.lightBlue};
`;

export const TitleLine = styled.div`
  height: 1px;
  align-self: center;
  justify-self: left;
  background: ${colors.light};
  margin-left: 20px;
  max-width: 300px;
  width: 100%;
  opacity: 0.5;
`;
