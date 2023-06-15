import styled, { css } from "styled-components";
import colors from "../../colors";

export const Wrapper = styled.div`
  ${({ right }) =>
    right &&
    css`
      flex-direction: row-reverse;
    `}
  margin-top: 50px;
  width: 100%;
  min-height: 300px;
  display: flex;
`;

export const ImageWrapper = styled.div`
  width: 500px;
  height: 100%;
  aspect-ratio: 16/9;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const ImageFilter = styled.div`
  opacity: 75%;
  background: ${colors.mediumBlue};
  mix-blend-mode: hard-light;
  width: 100%;
  height: 100%;
  z-index: 10;
  position: absolute;
`;

export const ContentWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 5%;
`;

export const TitleContainer = styled.div`
  flex-direction: column;
  display: flex;
  ${({ right }) =>
    right
      ? css`
          align-items: start;
        `
      : css`
          align-items: end;
        `}
`;

export const Title = styled.h4`
  text-align: center;
  color: ${colors.light};
  opacity: 75%;
  white-space: pre-wrap;
  font-size: 1.2rem;
  margin-top: 2px;
`;

export const TitleTag = styled.span`
  color: ${colors.lightBlue};
  font-weight: 100;
  font-size: 0.75rem;
`;

export const DescriptionContainer = styled.div`
  position: relative;
  margin-top: 10px;
  color: ${colors.light};
  font-weight: 100;
  font-size: 0.9rem;
  height: ${({ height }) => height + "px"};
`;

export const Description = styled.p`
  width: 400px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  background: ${colors.darkBlue};
  padding: 10px;
  position: absolute;
  border-radius: 5px;
  text-align: center;
  z-index: 11;
  ${({ right }) =>
    right
      ? css`
          left: 0;
        `
      : css`
          right: 0;
        `}
`;

export const TechnologiesContainer = styled.div`
  display: flex;
  ${({ right }) =>
    right
      ? css`
          justify-content: start;
        `
      : css`
          justify-content: end;
        `}
`;

export const Technology = styled.h3`
  color: ${colors.light};
  font-weight: 100;
  font-size: 0.75rem;
  white-space: pre-wrap;
  ${({ right }) =>
    right
      ? css`
          padding: 10px 15px 0 0;
        `
      : css`
          padding: 10px 0 0 15px;
        `}
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  position: absolute;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.25));
`;
