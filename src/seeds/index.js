import { SnippetContainer1, SnippetContainer2 } from "../styles";
import wa from "../images/whatsappclone.gif";

export default {
  introduction: {
    snippets: {
      name: {
        values: {
          first_name: "Felipe",
          last_name: "Ferreira",
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
            on how to build user-friendly products and scale it.
        `,
  },
  section1: {
    text: `Hello! My name is Felipe and I enjoy creating things that live on the internet. My interest in programming started back in 2014 when I decided to try editing some Minecraft server plugins — turns out I realised that to modify a simple plugin functionallity in Java required a lot of knowledge, so I started to learn logic and programming!
      \n\nFast-forward to today, and I've had the privilege of working at a important brazilian laboratory and a software house with amazing developers. I learned something new in every place I worked, my co-workers contributed a lot in this development, today I could say that I have a good knowledge both in Frontend and Backend.
      \n\nHere are a few technologies I've been working with recently:`,
    technologies: [
      "Typescript",
      "DO Cloud",
      "Nestjs",
      "Git",
      "Redis",
      "Docker",
      "React",
      "Postgres",
      "MongoDB",
      "Nginx",
      "Rust",
    ],
  },
  section2: {
    Pilab: {
      text: [
        `The Public Intelligence Laboratory aims to develop instruments, artifacts and management technologies whose center is the modernization of the state apparatus, so that it can support local, regional and international development.\n`,
        `Contributions:`,
        `- Built RESTful APIs that serve data a React front-end based on
dynamically chosen user inputs that handled over 5,570 brazilian municipalities.`,
        `- Built an educational API that consumes the least amount of bandwidth
possible, that focuses on students with insufficient internet access. It
allowed needy students all over Brazil to have access to information and do their
homework using their smartphones from home.`,
        `- Reviewed code and conducted testing for 3 projects in the laboratory, improving code quality and the performance of less experienced developers.\n`,
        `Technologies I used:`,
        `- React`,
        `- Vuejs`,
        `- Nestjs`,
        `- Expressjs`,
        `- Docker`,
        `- Nginx`,
        `- Git`,
        `- Bash`,
        `- Postgres`,
        `- MongoDB`,
        `- Redis`,
        `- Jest`,
        `- Digital Ocean Cloud Services`,
      ],
    },
    Incodde: {
      text: [
        `Incodde is a software house that make software projects for clients in all parts of Brazil and internal projects with SaaS model.\n`,
        `Contributions:`,
        `Developed and tested components for the creation of a blog alongside
CMS and Server-side rendering to maintain the SEO.\n
Developed and tested for both components and API services with the
goal of building a software that unifies the main ad platforms(Facebook, Google, Taboola) into one easy and user-friendly interface.\n
Developed components for the making of a modern UI that receives
data from an API which tracks and delivers it (similar to a web crawler)
from Instagram stories.\n
Developed API services for a digital affiliate marketing service platform.\n`,
        `Technologies I used:`,
        `- React`,
        `- Vuejs`,
        `- Expressjs`,
        `- Docker`,
        `- Nginx`,
        `- Git`,
        `- Bash`,
        `- Postgres`,
        `- MongoDB`,
        `- Jest`,
        `- AWS`,
      ],
    },
  },
  section3: {
    projects: [
      {
        label: `Featured Project`,
        title: `CUTCLIP`,
        image:
          "https://camo.githubusercontent.com/a16f7ed8da746953d9a03e97f6313d0b21ff441a1c741f4916fde5c867f0c402/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f6f7a48584f4742463530515333316b7155502f67697068792e676966",
        description: `An application that provides an simple UI to the user that allows to select any part of an youtube video and download it without the need to spend time and internet connection downloading the entire video.`,
        technologies: [
          "Vuejs",
          "Node",
          "ffmpeg",
          "YoutubePlayer\nAPI",
          "Socket IO",
        ],
        right: true,
      },
      {
        label: `Featured Project`,
        title: `Whatsapp Web\nUI Clone`,
        image: wa,
        description: `A project created with the objective to learn react and it's patterns cloning the Whatsapp Web UI.`,
        technologies: ["React", "Redux", "Styled Components"],
        right: false,
      },
    ],
  },
};
