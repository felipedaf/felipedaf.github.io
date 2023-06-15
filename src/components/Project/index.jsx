import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import {
  ContentWrapper,
  ImageWrapper,
  Wrapper,
  Video,
  ImageFilter,
  TitleContainer,
  DescriptionContainer,
  TechnologiesContainer,
  TitleTag,
  Title,
  Description,
  Technology,
} from "./styles";

const Project = ({ name, description, technologies = [], image, right }) => {
  const [descriptionHeight, setDescriptionHeight] = useState(0);
  const descriptionDiv = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setDescriptionHeight(descriptionDiv.current.clientHeight);
    }, 1);
  }, [description]);

  return (
    <Wrapper right={right}>
      <ImageWrapper>
        <ImageFilter />
        <Video autoPlay muted loop>
          <source src={image} type="video/mp4" />
        </Video>
      </ImageWrapper>
      <ContentWrapper>
        <TitleContainer right={right}>
          <TitleTag>Featured Project</TitleTag>
          <Title>{name}</Title>
        </TitleContainer>
        <DescriptionContainer height={descriptionHeight}>
          <Description ref={descriptionDiv} right={right}>
            {description}
          </Description>
        </DescriptionContainer>
        <TechnologiesContainer right={right}>
          {technologies.map((t) => (
            <Technology key={t} right={right}>
              {t}
            </Technology>
          ))}
        </TechnologiesContainer>
      </ContentWrapper>
    </Wrapper>
  );
};

Project.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.array,
  image: PropTypes.any,
  right: PropTypes.bool,
};

export default Project;
