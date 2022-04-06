import React, { useState } from "react";
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
} from "./styles";
import seeds from "./seeds";
import {
  CodeSnippet,
  Information,
  StillBuilding,
  TextSelector,
  Project,
} from "./components";

const App = () => {
  const [profileSlide, setProfileSlide] = useState(false);

  return (
    <Wrapper>
      <ContentContainer>
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
        <Section>
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
        </Section>
        <Section>
          <Information shifted label="Where I've Worked" number={2}>
            <TextSelector options={seeds.section2} />
          </Information>
        </Section>
        <Section>
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
        </Section>

        {/* Add something above here */}
        {/* <Section>
          <StillBuilding />
        </Section> */}
      </ContentContainer>
    </Wrapper>
  );
};

export default App;
