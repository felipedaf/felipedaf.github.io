import React from "react";
import {
  BottomRightPiece,
  PieceWrapper,
  TopLeftPiece,
  Wrapper,
} from "./styles";
import PropTypes from "prop-types";

const LoadingCover = ({ onFinishCloseAnimation, percentage }) => {
  return (
    <Wrapper>
      <PieceWrapper>
        <TopLeftPiece />
        <BottomRightPiece />
      </PieceWrapper>
    </Wrapper>
  );
};

LoadingCover.propTypes = {
  onFinishCloseAnimation: PropTypes.func,
  percentage: PropTypes.number,
};

export default LoadingCover;
