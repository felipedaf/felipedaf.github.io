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
    text: `Hello! My name is Felipe and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
      \n\nFast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
      \n\nHere are a few technologies I've been working with recently:`,
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
  section2: {
    Incodde: {
      text: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel lacus felis. Pellentesque vitae sapien rhoncus, suscipit sapien sit amet, tempus diam. Nam semper aliquet semper. Maecenas leo orci, tempor at est a, mollis rutrum mi. Duis varius vehicula condimentum. Nam dolor nulla, vestibulum sed semper ut, rhoncus sit amet arcu. Nam molestie volutpat rhoncus. Sed nisi dui, pulvinar nec tincidunt a, ultricies et elit. Cras pretium porttitor dui vitae euismod. Mauris porttitor ligula eu urna faucibus laoreet ut vel mauris. Pellentesque non mauris velit. Donec ultricies tempus tortor ut semper.",
        "Nullam scelerisque pulvinar viverra. Praesent vestibulum quam facilisis tellus venenatis volutpat. Quisque non nibh tortor. Nam congue, eros sit amet vehicula maximus, nisi velit scelerisque sem, et tristique risus lorem vitae libero. Curabitur risus purus, mollis ut libero ac, tincidunt sodales erat. Donec sodales nibh quam, sed semper dui bibendum vel. Mauris nec leo augue. Fusce fringilla tincidunt rutrum. Suspendisse interdum est lacus, at tincidunt mauris scelerisque non. Maecenas mattis placerat arcu, pretium congue odio ultrices eu.",
        "Sed fringilla consequat dui, et laoreet metus facilisis sed. Ut eros est, lobortis a lectus ut, eleifend porttitor metus. Pellentesque accumsan sem a velit tempor, sed sagittis neque imperdiet. Pellentesque tincidunt sollicitudin risus, et fringilla mi aliquet nec. Nulla id blandit elit. Nulla nec nisl nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent sodales posuere magna, a sagittis lacus lobortis euismod. Praesent nec lectus dictum, eleifend ligula ut, pulvinar orci. Proin imperdiet luctus efficitur. Sed feugiat mauris at blandit hendrerit.",
      ],
    },
    Pilab: {
      text: [
        "Sed fringilla consequat dui, et laoreet metus facilisis sed. Ut eros est, lobortis a lectus ut, eleifend porttitor metus. Pellentesque accumsan sem a velit tempor, sed sagittis neque imperdiet. Pellentesque tincidunt sollicitudin risus, et fringilla mi aliquet nec. Nulla id blandit elit. Nulla nec nisl nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent sodales posuere magna, a sagittis lacus lobortis euismod. Praesent nec lectus dictum, eleifend ligula ut, pulvinar orci. Proin imperdiet luctus efficitur. Sed feugiat mauris at blandit hendrerit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel lacus felis. Pellentesque vitae sapien rhoncus, suscipit sapien sit amet, tempus diam. Nam semper aliquet semper. Maecenas leo orci, tempor at est a, mollis rutrum mi. Duis varius vehicula condimentum. Nam dolor nulla, vestibulum sed semper ut, rhoncus sit amet arcu. Nam molestie volutpat rhoncus. Sed nisi dui, pulvinar nec tincidunt a, ultricies et elit. Cras pretium porttitor dui vitae euismod. Mauris porttitor ligula eu urna faucibus laoreet ut vel mauris. Pellentesque non mauris velit. Donec ultricies tempus tortor ut semper.",
        "Nullam scelerisque pulvinar viverra. Praesent vestibulum quam facilisis tellus venenatis volutpat. Quisque non nibh tortor. Nam congue, eros sit amet vehicula maximus, nisi velit scelerisque sem, et tristique risus lorem vitae libero. Curabitur risus purus, mollis ut libero ac, tincidunt sodales erat. Donec sodales nibh quam, sed semper dui bibendum vel. Mauris nec leo augue. Fusce fringilla tincidunt rutrum. Suspendisse interdum est lacus, at tincidunt mauris scelerisque non. Maecenas mattis placerat arcu, pretium congue odio ultrices eu.",
      ],
    },
  },
  section3: {},
};
