import React from "react";
import { ArrowImage, Span, Wrapper } from "./styles";
import ArrowDown from "../../images/ArrowDown.svg";

const ScrollDown = () => {
  return (
    <Wrapper>
      <Span>SCROLL DOWN</Span>
      <ArrowImage src={ArrowDown} />
    </Wrapper>
  );
};

export default ScrollDown;
