import { BadgeType } from "./interfaces/components.js";
import type { Portfolio } from "./interfaces/portfolio.js";

const template: Portfolio = {
  primaryColor: "#E69FBAFF",
  sidebar: {
    avatar: {
      src: "https://avatars.githubusercontent.com/u/46852305?v=4",
      alt: "Ruben's avatar",
    },
    name: "Ruben Barros",
    description: "Devops Engineer",
    contacts: [
      {
        icon: "carbon:logo-github",
        link: "https://github.com/SASNOVACAT08",
        text: "SASNOVACAT08",
      },
      {
        icon: "carbon:logo-linkedin",
        link: "https://www.linkedin.com/in/barrosruben",
        text: "Ruben Barros",
      },
      {
        icon: "carbon:email",
        link: "mailto:ruben.barr08@gmail.com",
        text: "ruben.barr08@gmail.com",
      },
    ],
  },
  index: {
    title: "Overview - Ruben Barros",
    navbar: "Overview",
    content: `From Fullstack Developer to DevOps Engineer, I'm very curious and am always looking to learn, while doing a lot of IT monitoring to know
    what tomorrow will bring. Today, after having done several personal projects, I turned my expertise to serverless and cloud providers to see new horizons.
    Now, I'm able to develop better quality products both in terms of code and project architecture.`,
  },
  skills: {
    title: "Skills - Ruben Barros",
    navbar: "Skills",
    content: [
      {
        title: "Stacks",
        content: [
          {
            icon: "vscode-icons:file-type-typescript-official",
          },
          {
            icon: "vscode-icons:file-type-python",
          },
          {
            icon: "vscode-icons:file-type-go",
          },
          {
            icon: "vscode-icons:file-type-rust",
          },
        ],
      },
      {
        title: "Front",
        content: [
          {
            icon: "vscode-icons:file-type-nuxt",
          },
          {
            icon: "vscode-icons:file-type-next",
          },
          {
            icon: "vscode-icons:file-type-astro",
          },
          {
            icon: "vscode-icons:file-type-svelte",
          },
        ],
      },
      {
        title: "Back",
        content: [
          {
            icon: "vscode-icons:file-type-pgsql",
          },
          {
            icon: "logos:aws-dynamodb",
          },
        ],
      },
      {
        title: "Devops",
        content: [
          {
            icon: "simple-icons:githubactions",
          },
          {
            icon: "vscode-icons:file-type-terraform",
          },
          {
            icon: "logos:aws",
          },
          {
            icon: "vscode-icons:file-type-azure",
            type: BadgeType.SOON,
          },
          {
            icon: "logos:google-cloud",
            type: BadgeType.SOON,
          },
        ],
      },
    ],
  },
  career: {
    title: "Career - Ruben Barros",
    navbar: "Career",
    content: [
      {
        title: "Tastycloud - Developer Fullstack",
        description: "Feb 2021 - Aug 2023",
        content:
          "Tastycloud is a startup that provides a platform for restaurants to manage their online orders. I was part of the development team, working on the frontend and backend of the platform.",
      },
      {
        title: "IIM - Institut de l'Internet et du Multimédia",
        description: "Sep 2019 - Jun 2023",
        content: "IIM is a french school.",
      },
    ],
  },
  learn: {
    title: "Learn - Ruben Barros",
    navbar: "Learn",
    content: {},
  },
};

export default template;
