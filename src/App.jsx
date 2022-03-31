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
  SnippetContainer1,
  SnippetContainer2,
  MainSection,
  Description,
  ProfilePicFrame,
  InformationWrapper,
  ProfilePic,
  ProfilePicFilter,
} from "./styles";

import { CodeSnippet, Information, StillBuilding } from "./components";

const snippets = [
  {
    first_name: "Felipe",
    last_name: "Amorim",
  },
  {
    occupation: "Software Engineer",
    focus: "Fullstack",
  },
];

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
                I build systems for the web.
              </IntroductionPhrase>
              <Introduction>
                I&apos;m a software engineer and Computer Science student
                specializing in building (and occasionally designing) large
                scale distributed systems. Currently, I&apos;m focused on how to
                build backend systems and scale it.
              </Introduction>
            </PresentationContainer>
            <PresentationContentContainer>
              <SnippetContainer1>
                <CodeSnippet name="name" value={snippets[0]} delay easterEgg />
              </SnippetContainer1>
              <SnippetContainer2>
                <CodeSnippet name="seeking" value={snippets[1]} />
              </SnippetContainer2>
            </PresentationContentContainer>
          </Section>
        </MainSection>
        <Section>
          <InformationWrapper>
            <Information label="About Me" number={1}>
              <Description>
                Hello! My name is Felipe and I enjoy creating things that live
                on the internet. My interest in web development started back in
                2012 when I decided to try editing custom Tumblr themes — turns
                out hacking together a custom reblog button taught me a lot
                about HTML & CSS!
                <br />
                <br />
                Fast-forward to today, and Ive had the privilege of working at
                an advertising agency, a start-up, a huge corporation, and a
                student-led design studio. My main focus these days is building
                accessible, inclusive products and digital experiences at
                Upstatement for a variety of clients.
                <br />
                <br />
                Here are a few technologies Ive been working with recently:
              </Description>
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

        {/* Add something above here */}
        <Section>
          <StillBuilding />
        </Section>
      </ContentContainer>
    </Wrapper>
  );
};

export default App;
