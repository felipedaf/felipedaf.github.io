import styled from "styled-components";
import colors from "./colors";

export const Wrapper = styled.div`
  min-width: 100%;
  min-height: 100vh;
  background-color: ${colors.dark};
`;

export const ContentContainer = styled.div`
  padding: 100px 10px;
  max-width: 1000px;
  min-height: 100vh;
  margin: auto;
`;

export const Section = styled.div`
  display: flex;
  margin-bottom: 240px;
`;

export const PresentationContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PresentationContentContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const Greeting = styled.h2`
  color: ${colors.lightBlue};
  font-size: 5rem;
  font-weight: 1000;
  line-height: 4rem;
  margin-bottom: 8px;
  left: -0.25rem;
  position: relative;
`;

export const Name = styled.span`
  color: ${colors.light};
  font-size: 2.65rem;
  line-height: 2.3rem;
  position: relative;
  left: -0.2rem;
  margin-bottom: 50px;
`;

export const IntroductionPhrase = styled.h3`
  color: ${colors.light};
  opacity: 75%;
  font-size: 2.65rem;
  line-height: 2.3rem;
  position: relative;
  left: -0.2rem;
  font-weight: 400;
  margin-bottom: 8px;
  white-space: nowrap;
`;

export const Introduction = styled.p`
  font-weight: 300;
  font-size: 0.95rem;
  color: ${colors.light};
  opacity: 75%;
  width: 32rem;
`;

export const SnippetContainer1 = styled.div`
  position: absolute;
  right: 0;
`;

export const SnippetContainer2 = styled.div`
  position: absolute;
  bottom: -40%;
`;

export const MainSection = styled.div`
  min-height: 100vh;
  display: grid;
  align-items: center;
  width: 100%;
`;
