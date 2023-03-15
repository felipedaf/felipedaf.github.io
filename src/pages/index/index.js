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
} from "./styles";
import seeds from "../../seeds";
import {
  CodeSnippet,
  Information,
  StillBuilding,
  TextSelector,
  Project,
} from "../../components";
import PageEventHandlers from "../../utils/eventHandlers";
import ScrollDown from "../../components/ScrollDown";

const App = () => {
  const [profileSlide, setProfileSlide] = useState(false);
  const scrollElement = useRef(null);

  useEffect(() => {
    const eventHandler = new PageEventHandlers(scrollElement.current);
    eventHandler.addScrollEvent(document.querySelectorAll("section"));
    scrollElement.current.scrollTo(0, 100);

    return () => {
      eventHandler.disconnect();
    };
  }, []);

  return (
    <Wrapper ref={scrollElement}>
      <ContentContainer>
        <AnimationsContainer>
          <ScrollDown />
        </AnimationsContainer>
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
  );
};

export default App;
