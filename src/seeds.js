import { SnippetContainer1, SnippetContainer2 } from "./styles";

export default {
  introduction: {
    snippets: {
      name: {
        values: {
          first_name: "Felipe",
          last_name: "Amorim",
        },
        delay: true,
        easterEgg: true,
        Component: SnippetContainer1,
      },
      seeking: {
        values: {
          occupation: "Software Engineer",
          focus: "Fullstack",
        },
        delay: false,
        easterEgg: false,
        Component: SnippetContainer2,
      },
    },
    phrase: "I build systems for the web.",
    text: `
            I'm a software engineer and Computer Science student 
            specializing in building (and occasionally designing) 
            large scale distributed systems. Currently, I'm focused 
            on how to build backend systems and scale it.
        `,
  },
  section1: {
    text: [
      `Hello! My name is Felipe and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!`,
      `Fast-forward to today, and Ive had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.`,
      `Here are a few technologies Ive been working with recently:`,
    ],
    technologies: [
      "Django",
      "GCP",
      "Vuejs",
      "Git",
      "Redis",
      "Docker",
      "React",
      "Postgres",
    ],
  },
};
