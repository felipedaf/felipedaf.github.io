import React, { useState } from "react";
import {
  BottomRightPiece,
  LoadingText,
  PieceWrapper,
  TopLeftPiece,
  Wrapper,
} from "./styles";
import PropTypes from "prop-types";

const LoadingCover = ({ onFinishAnimation, percentage }) => {
  const value = Math.round(percentage * 100) + "%";
  const isComplete = value === "100%";

  if (isComplete) {
    setTimeout(() => {
      onFinishAnimation();
    }, 1600);
  }

  return (
    <Wrapper>
      <PieceWrapper {...{ isComplete }}>
        <LoadingText {...{ isComplete }}>
          <span>{value}</span>
        </LoadingText>
        <TopLeftPiece {...{ isComplete }} />
        <BottomRightPiece {...{ isComplete }} />
      </PieceWrapper>
    </Wrapper>
  );
};

LoadingCover.propTypes = {
  onFinishAnimation: PropTypes.func,
  percentage: PropTypes.number,
};

export default LoadingCover;
