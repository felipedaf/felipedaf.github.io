import { SnippetContainer1, SnippetContainer2 } from "./styles";
import wa from "./assets/whatsappclone.gif";

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
            on how to build backend systems and scale it.
        `,
  },
  section1: {
    text: `Hello! My name is Felipe and I enjoy creating things that live on the internet. My interest in programming started back in 2014 when I decided to try editing some Minecraft server plugins — turns out I realised that to modify a simple plugin functionallity in Java required a lot of knowledge, so I started to learn logic and programming!
      \n\nFast-forward to today, and I've had the privilege of working at a important brazilian laboratory and a software house with amazing developers. My main focus these days is building experiences that meaningfully improve people's lives today and set the stage for even bigger improvements in the future.
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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel lacus felis. Pellentesque vitae sapien rhoncus, suscipit sapien sit amet, tempus diam. Nam semper aliquet semper. Maecenas leo orci, tempor at est a, mollis rutrum mi. Duis varius vehicula condimentum. Nam dolor nulla, vestibulum sed semper ut, rhoncus sit amet arcu. Nam molestie volutpat rhoncus. Sed nisi dui, pulvinar nec tincidunt a, ultricies et elit. Cras pretium porttitor dui vitae euismod. Mauris porttitor ligula eu urna faucibus laoreet ut vel mauris. Pellentesque non mauris velit. Donec ultricies tempus tortor ut semper.",
        "Nullam scelerisque pulvinar viverra. Praesent vestibulum quam facilisis tellus venenatis volutpat. Quisque non nibh tortor. Nam congue, eros sit amet vehicula maximus, nisi velit scelerisque sem, et tristique risus lorem vitae libero. Curabitur risus purus, mollis ut libero ac, tincidunt sodales erat. Donec sodales nibh quam, sed semper dui bibendum vel. Mauris nec leo augue. Fusce fringilla tincidunt rutrum. Suspendisse interdum est lacus, at tincidunt mauris scelerisque non. Maecenas mattis placerat arcu, pretium congue odio ultrices eu.",
        "Sed fringilla consequat dui, et laoreet metus facilisis sed. Ut eros est, lobortis a lectus ut, eleifend porttitor metus. Pellentesque accumsan sem a velit tempor, sed sagittis neque imperdiet. Pellentesque tincidunt sollicitudin risus, et fringilla mi aliquet nec. Nulla id blandit elit. Nulla nec nisl nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent sodales posuere magna, a sagittis lacus lobortis euismod. Praesent nec lectus dictum, eleifend ligula ut, pulvinar orci. Proin imperdiet luctus efficitur. Sed feugiat mauris at blandit hendrerit.",
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
