import React, { useEffect, useRef, useState } from "react";
import {
  Wrapper,
  ContentContainer,
  Section,
  PresentationContainer,
  PresentationContentContainer,
  Greeting,
  Name,
  IntroductionPhrase,
  Introduction,
  MainSection,
  Description,
  ProfilePicFrame,
  InformationWrapper,
  ProfilePic,
  ProfilePicFilter,
  TechnologiesContainer,
  Technology,
  BlueLine,
  ScreenSection,
  ScreenSectionWrapper,
  AnimationsContainer,
  ParticleContainer,
} from "../styles/index/styles";
import seeds from "../seeds";
import {
  CodeSnippet,
  Information,
  TextSelector,
  Project,
  LoadingCover,
} from "../components";
import PageEventHandlers from "../utils/eventHandlers";
import ScrollDown from "../components/ScrollDown";
import {
  changeLoadingStateSmoothly,
  loadingPromises,
} from "../utils/loading.utils";
import particlesConfig from "../assets/particles.json";

const App = () => {
  const [profileSlide, setProfileSlide] = useState(false);
  const [showLoadingCover, setShowLoadingCover] = useState(true);
  const [loadingPercentage, setLoadingPercentage] = useState(0);
  const [showScrollDown, setShowScrollDown] = useState(false);
  const scrollElement = useRef(null);

  console.log("render");

  useEffect(() => {
    if (window !== undefined && document !== undefined) {
      scrollElement.current.removeEventListener(
        "scroll",
        window?.globalListeners?.scroll
      );
      const eventHandler = new PageEventHandlers(scrollElement.current);
      eventHandler.addScrollEvent(document.querySelectorAll("section"));

      const timeouts = loadingPromises(setLoadingPercentage);

      setTimeout(() => {
        timeouts.forEach((t) => clearTimeout(t));
        changeLoadingStateSmoothly(loadingPercentage, 1, setLoadingPercentage);
      }, 1000);

      return () => {
        eventHandler.disconnect();
      };
    }
  }, []);

  return (
    <>
      {showLoadingCover && (
        <LoadingCover
          percentage={Number(loadingPercentage)}
          onFinishAnimation={() => {
            setShowScrollDown(true);
            setShowLoadingCover(false);
          }}
        />
      )}
      <Wrapper id="page-wrapper" ref={scrollElement}>
        <ParticleContainer id="particles-js"></ParticleContainer>
        <ContentContainer>
          {showScrollDown && (
            <AnimationsContainer>
              <ScrollDown />
            </AnimationsContainer>
          )}
          <MainSection>
            <Section>
              <PresentationContainer>
                <Greeting>Hello</Greeting>
                <Name>I&apos;m Felipe.</Name>
                <IntroductionPhrase>
                  {seeds.introduction.phrase}
                </IntroductionPhrase>
                <Introduction>{seeds.introduction.text}</Introduction>
              </PresentationContainer>
              <PresentationContentContainer>
                {Object.keys(seeds.introduction.snippets).map((k) => {
                  const current = seeds.introduction.snippets[k];
                  return (
                    <current.Component key={k}>
                      <CodeSnippet
                        name={k}
                        value={current.values}
                        delay={current.delay}
                        easterEgg={current.easterEgg}
                      />
                    </current.Component>
                  );
                })}
              </PresentationContentContainer>
            </Section>
          </MainSection>
          <ScreenSectionWrapper>
            <ScreenSection>
              <InformationWrapper>
                <Information label="About Me" number={1}>
                  <Description>{seeds.section1.text}</Description>
                  <TechnologiesContainer>
                    {seeds.section1.technologies.map((t) => (
                      <Technology key={t}>
                        <BlueLine />
                        {t}
                      </Technology>
                    ))}
                  </TechnologiesContainer>
                </Information>
              </InformationWrapper>
              <ProfilePicFrame
                onMouseOver={() => setProfileSlide(true)}
                onMouseOut={() => setProfileSlide(false)}
              >
                <ProfilePicFilter slide={profileSlide} />
                <ProfilePic
                  slide={profileSlide}
                  src="https://avatars.githubusercontent.com/u/43426199?v=4"
                />
              </ProfilePicFrame>
            </ScreenSection>
          </ScreenSectionWrapper>

          <ScreenSectionWrapper>
            <ScreenSection>
              <Information shifted label="Where I've Worked" number={2}>
                <TextSelector options={seeds.section2} />
              </Information>
            </ScreenSection>
          </ScreenSectionWrapper>

          <ScreenSectionWrapper>
            <ScreenSection>
              <Information label="Some Things I’ve Built" number={3}>
                {seeds.section3.projects.map((p) => {
                  return (
                    <Project
                      key={p.title}
                      name={p.title}
                      description={p.description}
                      image={p.image}
                      technologies={p.technologies}
                      right={p.right}
                    ></Project>
                  );
                })}
              </Information>
            </ScreenSection>
          </ScreenSectionWrapper>

          {/* Add something above here */}
          {/* <Section>
          <StillBuilding />
        </Section> */}
        </ContentContainer>
      </Wrapper>
    </>
  );
};

export default App;
