import AdminProfileImage from "@/components/shared/AdminProfileImage";
import { ImageProps, ProfileType, ProjectDetailsType } from "@/types";

export const BrokenImage =
  "https://ehelperteam.com/wp-content/uploads/2019/09/Broken-images.png";

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
      contactNumber: "+91 9781295937",
      disclamer:
        "While I am always eager to connect and collaborate, I kindly request that all communications remain respectful and considerate. Thank you!",
    },
  },
};

export const myProjects: ProjectDetailsType[] = [
  {
    label: "ChatApp in ReactJs",
    comments: "",
    deployed: false,
    liveLink: "",
    image: "/chat-icon.png",
    alt: "ChatApp",
    links: {
      githubLink1: {
        ok: true,
        link: "https://github.com/gomzyyy/secretChat",
        label: "Frontend",
      },
      githubLink2: {
        ok: true,
        link: "https://github.com/gomzyyy/Backend_secretChat",
        label: "Backend",
      },
    },
    description:
      "A real-time chat application built with React, Node.js, and Socket.IO, allowing users to send and receive messages instantly.",
    completed: true,
    technologiesUsed: [
      "ReactJs",
      "Node.js",
      "Express",
      "Socket.IO",
      "Redux Toolkit",
      "Tailwind CSS",
    ],
    credits: [],
  },
  {
    label: "Social Media App in React-Native and Expo-Go",
    comments: "",
    deployed: false,
    liveLink: "",
    image: "/expo-image.png",
    alt: "Social Media App",
    links: {
      githubLink1: {
        ok: true,
        link: "https://github.com/gomzyyy/Pinterest_Clone",
        label: "Frontend",
      },
      githubLink2: {
        ok: true,
        link: "https://github.com/gomzyyy/Pinterest_Clone_backend-main",
        label: "Backend",
      },
    },
    description:
      "A multi-feature full stack social media application built using react-native expo and NodeJs; More than 16 screens and 1M+ lines of code.",
    completed: true,
    technologiesUsed: [
      "React-Native",
      "typeScript",
      "Expo-Go",
      "Node.js",
      "Express",
      "Socket.IO",
      "Redux Toolkit",
      "Tailwind CSS",
    ],
    credits: [],
  },
  {
    label: "Portfolio(Old version)",
    comments: "",
    deployed: true,
    liveLink: "https://remarkable-dusk-d9cdc3.netlify.app/",
    image: "/p.png",
    alt: "Portfolio",
    links: {
      githubLink1: {
        ok: true,
        link: "https://github.com/gomzyyy/Portfolio/tree/main/client-side",
        label: "Frontend",
      },
      githubLink2: {
        ok: true,
        link: "https://github.com/gomzyyy/Portfolio/tree/main/backend",
        label: "Backend",
      },
    },
    description:
      "Responsive Portfolio website in ReactJs compatible for all devices with Conversation feature implimented using Sockets.",
    completed: true,
    technologiesUsed: [
      "React",
      "Node.js",
      "Express",
      "Socket.IO",
      "Redux Toolkit",
    ],
    credits: [],
  },
  {
    label: "ToDo Mobile App using React-Native CLI",
    comments: "",
    deployed: false,
    liveLink: "",
    image: "/todo_icon.png",
    alt: "Portfolio",
    links: {
      githubLink1: {
        ok: true,
        link: "https://github.com/gomzyyy/WhatNextTodoApp",
        label: "Frontend",
      },
      githubLink2: {
        ok: false,
        link: "",
        label: "Backend",
      },
    },
    description:
      "Multi-featured ToDo app built using React-Native CLI(Used in most hybrid Applications); clean UI and smooth animations enhances the user experiance.",
    completed: true,
    technologiesUsed: [
      "React",
      "Node.js",
      "Express",
      "Socket.IO",
      "Redux Toolkit",
    ],
    credits: [],
  },
  {
    label: "UI built as an Intern at 'IT MAVERICK SOLUTIONS'",
    comments: "Deployment not allowed",
    deployed: false,
    liveLink: "",
    image: "/internship-logo.png",
    alt: "Portfolio",
    links: {
      githubLink1: {
        ok: true,
        link: "https://github.com/gomzyyy/Itms-task-master",
        label: "Over 5+ webpages",
      },
      githubLink2: {
        ok: false,
        link: "",
        label: "",
      },
    },
    description:
      "Built multiple webpages using my fundamentals of web development, compatible for all the devices; PC,Tab,mobile etc, during my Internship.",
    completed: true,
    technologiesUsed: ["HTML", "CSS", "JavaScript"],
    credits: [
      {
        label: "Certificate",
        src: "https://drive.google.com/file/d/1cOGMciXJ9bQj0tcePQUst1xS6dwGNFsU/view?usp=drive_link",
      },
    ],
  },
];

export const blogRules = [
  { id: 1, rule: "Use a clear, engaging and relevant title." },
  { id: 2, rule: "Write original and high-quality content." },
  { id: 3, rule: "Keep paragraphs short and readable." },
  { id: 4, rule: "Use proper grammar and punctuation." },
  { id: 5, rule: "Use of a relevant thumbnail is recommended." },
  {
    id: 6,
    rule: "Try using 16:9 Thumbnail for better compatilility with layout.(Only for preview.)",
  },
  { id: 7, rule: "Click on preview button to see the preview of your blog." },
];
