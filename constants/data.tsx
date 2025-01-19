import AdminProfileImage from "@/components/shared/AdminProfileImage";
import { ImageProps, ProfileType } from "@/types";

export const ProfileData: ProfileType = {
  name: "GomzyDhingra",
  action: (callback) => callback(),
  image: ({ height, width }: ImageProps) => (
    <AdminProfileImage height={height} width={width} />
  ),
  label: "Full-stack Developer",
  dateOfBirth: "25/12/2003",
  bio: "Gomzy Dhingra is a passionate full-stack developer with experience in JavaScript, React, Node.js, and MongoDB. He is committed to learning new technologies and building meaningful projects. His journey in tech began with a simple interest in programming, and now he is focused on crafting innovative web applications.",
  extendedBio:
    "Gomzy Dhingra is a full-stack developer based in India. With expertise in frontend technologies like React and Next.js, as well as backend frameworks like Node.js and Express.js, he has a passion for building scalable and efficient applications. He has experience with various state management tools such as Redux and Zustand, and is proficient in version control systems like Git and GitHub. His ongoing learning journey keeps him motivated to stay ahead in the ever-evolving world of web development.",
  journey:
    "Gomzy's coding journey started in 2022 when he decided to pursue a diploma in computer basics and later transitioned into web development. Self-taught through open-source resources, he quickly grasped core web technologies like HTML, CSS, JavaScript, and React. Building his first project—a simple calculator—was a key milestone, fueling his passion to create complex applications and expand his skill set to include backend technologies such as Node.js and MongoDB.",
  skills: {
    languages: [
      {
        name: "HTML",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        experienceInMonths: 10,
        image: "path/to/html-icon.png",
        themeColor: "#E34F26",
        bgColor: "#F7F7F7",
        textColor: "#ffffff", // Black text for contrast
        description: "I first learned HTML in high school...",
        projectCount: 15,
      },
      {
        name: "CSS",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        experienceInMonths: 10,
        image: "path/to/css-icon.png",
        themeColor: "#1572B6",
        bgColor: "#F1F5F9",
        textColor: "#ffffff", // Black text for contrast
        description:
          "CSS was essential in turning static HTML pages into visually appealing websites...",
        projectCount: 18,
      },
      {
        name: "JavaScript",
        link: "https://javascript.info",
        experienceInMonths: 8,
        image: "path/to/javascript-icon.png",
        themeColor: "#F7DF1E",
        bgColor: "#333",
        textColor: "#000000", // White text for contrast
        description:
          "I started learning JavaScript to enhance my web development skills...",
        projectCount: 12,
      },
      {
        name: "TypeScript",
        link: "https://www.typescriptlang.org",
        experienceInMonths: 6,
        image: "path/to/typescript-icon.png",
        themeColor: "#3178C6",
        bgColor: "#F1F5F9",
        textColor: "#ffffff", // Black text for contrast
        description:
          "I decided to learn TypeScript to improve the scalability...",
        projectCount: 5,
      },

      {
        name: "C Language",
        link: "https://en.wikipedia.org/wiki/C_(programming_language)",
        experienceInMonths: 6,
        image: "path/to/c-icon.png",
        themeColor: "#A8B9CC",
        bgColor: "#2A3A47",
        textColor: "#000000", // White text for contrast
        description:
          "I learned C as part of my early computer science education...",
        projectCount: 3,
      },
    ],
    versionControl: [
      {
        name: "Git",
        link: "https://git-scm.com",
        experienceInMonths: 10,
        image: "path/to/git-icon.png",
        themeColor: "#F05032",
        bgColor: "#FFFAF1",
        textColor: "#ffffff", // Black text for contrast
        description:
          "I started using Git early in my web development journey...",
        projectCount: 10,
      },
      {
        name: "GitHub",
        link: "https://github.com",
        experienceInMonths: 10,
        image: "path/to/github-icon.png",
        themeColor: "#181717",
        bgColor: "#F1F5F9",
        textColor: "#ffffff", // Black text for contrast
        description:
          "GitHub was a crucial tool in my collaborative projects...",
        projectCount: 12,
      },
    ],
    stateManagement: [
      {
        name: "Redux",
        link: "https://redux.js.org",
        experienceInMonths: 6,
        image: "path/to/redux-icon.png",
        themeColor: "#764ABC",
        bgColor: "#F7F1FF",
        textColor: "#ffffff", // Black text for contrast
        description:
          "I learned Redux when building larger React applications...",
        projectCount: 6,
      },
      {
        name: "Zustand",
        link: "https://github.com/pmndrs/zustand",
        experienceInMonths: 4,
        image: "path/to/zustand-icon.png",
        themeColor: "#2D3748",
        bgColor: "#E2E8F0",
        textColor: "#ffffff", // Black text for contrast
        description:
          "I discovered Zustand when looking for a simpler state management solution...",
        projectCount: 3,
      },
    ],
    frameworksAndLibraries: [
      {
        name: "React",
        link: "https://reactjs.org",
        experienceInMonths: 8,
        image: "path/to/react-icon.png",
        themeColor: "#61DAFB",
        bgColor: "#F1F5F9",
        textColor: "#000000", // Black text for contrast
        description:
          "I started learning React after building several static websites...",
        projectCount: 10,
      },
      {
        name: "React-Native",
        link: "https://reactnative.dev",
        experienceInMonths: 6,
        image: "path/to/react-native-icon.png",
        themeColor: "#61DAFB",
        bgColor: "#F1F5F9",
        textColor: "#000000", // Black text for contrast
        description:
          "React Native allowed me to extend my knowledge of React...",
        projectCount: 5,
      },
      {
        name: "Next.js",
        link: "https://nextjs.org",
        experienceInMonths: 4,
        image: "path/to/nextjs-icon.png",
        themeColor: "#ffffff",
        bgColor: "#F1F5F9",
        textColor: "#000000", // Black text for contrast
        description:
          "I learned Next.js to optimize React apps for server-side rendering...",
        projectCount: 3,
      },
    ],
    databases: [
      {
        name: "MongoDB",
        link: "https://www.mongodb.com",
        experienceInMonths: 6,
        image: "path/to/mongodb-icon.png",
        themeColor: "#47A248",
        bgColor: "#E2F9E1",
        textColor: "#ffffff", // Black text for contrast
        description:
          "I learned MongoDB when I started building full-stack applications...",
        projectCount: 4,
      },
    ],
  },

  more: {
    interests: ["Reading", "Photography", "Gaming", "Music", "Travelling"],
    contact: {
      email: "gomzydhingra69@gmail.com",
      linkedin: "https://www.linkedin.com/in/gomzy-dhingra-4140202b5",
      github: "https://github.com/gomzyyy",
    },
  },
};
