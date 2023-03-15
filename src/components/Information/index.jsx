import React, { useMemo } from "react";
import PropTypes from "prop-types";
import {
  SectionTitle,
  Wrapper,
  SectionNumber,
  TitleLine,
  ContainerDiv,
  ExpansibleDiv,
  Content,
} from "./styles";

const Information = ({ shifted, number, label, children }) => {
  const leadingZeroNumber = useMemo(() => {
    let leadZero = number < 10 && number >= 0 && "0";

    return leadZero + number.toString();
  }, [number]);

  return (
    <Wrapper shifted={shifted}>
      <SectionTitle>
        <ContainerDiv>
          <SectionNumber>{leadingZeroNumber}. </SectionNumber>
          {label}
        </ContainerDiv>
        <ExpansibleDiv>
          <TitleLine />
        </ExpansibleDiv>
      </SectionTitle>
      <Content>{children}</Content>
    </Wrapper>
  );
};

Information.propTypes = {
  shifted: PropTypes.bool,
  number: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};

export default Information;
