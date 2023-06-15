import styled from "styled-components";
import colors from "../../colors";

export const Wrapper = styled.div`
  min-width: 100%;
  height: 100vh;
  background-color: ${colors.dark};
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ContentContainer = styled.div`
  padding: 100px 10px;
  max-width: 1000px;
  min-height: 100vh;
  margin: auto;
  position: relative;
`;

export const Section = styled.div`
  display: flex;
  margin-bottom: 60px;
  scroll-snap-align: center;
`;

export const ScreenSectionWrapper = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: center;
`;

export const ScreenSection = styled.div`
  display: flex;
`;

export const ShiftedSection = styled.div`
  display: flex;
  margin-bottom: 240px;
  padding-left: 50px;
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

export const MainSection = styled.section`
  min-height: 100vh;
  display: grid;
  align-items: center;
  width: 100%;
`;

export const Description = styled.p`
  font-size: 0.95rem;
  color: ${colors.light};
  margin-top: 20px;
  font-weight: 200;
  white-space: pre-wrap;
`;

export const InformationWrapper = styled.div`
  width: calc(100% - 250px);
`;

export const ProfilePicFrame = styled.div`
  margin: 50px 0 50px 50px;
  height: 200px;
  width: 200px;
  border: 1px ${colors.lightBlue} solid;
  position: relative;
`;

export const ProfilePicFilter = styled.div`
  background: ${colors.lightBlue};
  mix-blend-mode: hard-light;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 10;
  ${({ slide }) =>
    slide
      ? "transform: translate(0, 0); opacity: 0.1;"
      : "transform: translate(-15px, -25px);"}
  transition: transform .2s, opacity .4s;
`;
export const ProfilePic = styled.img`
  position: absolute;
  width: 100%;

  ${({ slide }) =>
    slide
      ? "transform: translate(0, 0);"
      : "transform: translate(-15px, -25px);"}
  transition: transform .2s;
`;

export const TechnologiesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  max-width: 400px;
`;

export const Technology = styled.div`
  font-weight: 200;
  color: ${colors.light};
  margin: 5px 0;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
`;

export const BlueLine = styled.div`
  width: 4px;
  height: 2px;
  background-color: ${colors.lightBlue};
  margin-right: 4px;
`;

export const AnimationsContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;
