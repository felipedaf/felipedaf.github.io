import React from "react";
import {
  Wrapper,
  ContentContainer,
  FirstSection,
  PresentationContainer,
  PresentationContentContainer,
  Greeting,
  Name,
  IntroductionPhrase,
  Introduction,
  SnippetContainer1,
  SnippetContainer2,
} from "./styles";

import { CodeSnippet, StillBuilding } from "./components";

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

const App = () => (
  <Wrapper>
    <ContentContainer>
      <FirstSection>
        <PresentationContainer>
          <Greeting>Hello</Greeting>
          <Name>I&apos;m Felipe.</Name>
          <IntroductionPhrase>I build systems for the web.</IntroductionPhrase>
          <Introduction>
            I&apos;m a software engineer and Computer Science student
            specializing in building (and occasionally designing) large scale
            distributed systems. Currently, I&apos;m focused on build backend
            systems and how to scale it.
          </Introduction>
        </PresentationContainer>
        <PresentationContentContainer>
          <SnippetContainer1>
            <CodeSnippet name="name" value={snippets[0]} />
          </SnippetContainer1>
          <SnippetContainer2>
            <CodeSnippet name="seeking" value={snippets[1]} />
          </SnippetContainer2>
        </PresentationContentContainer>
      </FirstSection>
      <FirstSection>
        <StillBuilding />
      </FirstSection>
    </ContentContainer>
  </Wrapper>
);

export default App;
