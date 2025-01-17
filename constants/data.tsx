import AdminProfileImage from "@/components/shared/AdminProfileImage";
import { ImageProps, ProfileType } from "@/types";

export const ProfileData:ProfileType = {
    name: "Gomzy Dhingra",
    action:(callback)=>callback(),
    image:({height,width}:ImageProps)=><AdminProfileImage height={height} width={width}/>,
    label: "Full-stack Developer",
    dateOfBirth: "25/12/2003",
    bio: "Gomzy Dhingra is a passionate full-stack developer with experience in JavaScript, React, Node.js, and MongoDB. He is committed to learning new technologies and building meaningful projects. His journey in tech began with a simple interest in programming, and now he is focused on crafting innovative web applications.",
    extendedBio: "Gomzy Dhingra is a full-stack developer based in India. With expertise in frontend technologies like React and Next.js, as well as backend frameworks like Node.js and Express.js, he has a passion for building scalable and efficient applications. He has experience with various state management tools such as Redux and Zustand, and is proficient in version control systems like Git and GitHub. His ongoing learning journey keeps him motivated to stay ahead in the ever-evolving world of web development.",
    journey: "Gomzy's coding journey started in 2022 when he decided to pursue a diploma in computer basics and later transitioned into web development. Self-taught through open-source resources, he quickly grasped core web technologies like HTML, CSS, JavaScript, and React. Building his first project—a simple calculator—was a key milestone, fueling his passion to create complex applications and expand his skill set to include backend technologies such as Node.js and MongoDB.",
    skills: {
      languages: [
        { name: "JavaScript", link: "https://javascript.info", experienceInMonths: 8, image: "path/to/javascript-icon.png" },
        { name: "TypeScript", link: "https://www.typescriptlang.org", experienceInMonths: 6, image: "path/to/typescript-icon.png" },
        { name: "HTML", link: "https://developer.mozilla.org/en-US/docs/Web/HTML", experienceInMonths: 10, image: "path/to/html-icon.png" },
        { name: "CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS", experienceInMonths: 10, image: "path/to/css-icon.png" },
        { name: "C", link: "https://en.wikipedia.org/wiki/C_(programming_language)", experienceInMonths: 6, image: "path/to/c-icon.png" },
      ],
      versionControl: [
        { name: "Git", link: "https://git-scm.com", experienceInMonths: 10, image: "path/to/git-icon.png" },
        { name: "GitHub", link: "https://github.com", experienceInMonths: 10, image: "path/to/github-icon.png" },
      ],
      stateManagement: [
        { name: "Redux", link: "https://redux.js.org", experienceInMonths: 6, image: "path/to/redux-icon.png" },
        { name: "Zustand", link: "https://github.com/pmndrs/zustand", experienceInMonths: 4, image: "path/to/zustand-icon.png" },
      ],
      frameworksAndLibraries: [
        { name: "React", link: "https://reactjs.org", experienceInMonths: 8, image: "path/to/react-icon.png" },
        { name: "React Native", link: "https://reactnative.dev", experienceInMonths: 6, image: "path/to/react-native-icon.png" },
        { name: "Next.js", link: "https://nextjs.org", experienceInMonths: 4, image: "path/to/nextjs-icon.png" },
        { name: "Node.js", link: "https://nodejs.org", experienceInMonths: 6, image: "path/to/nodejs-icon.png" },
        { name: "Express.js", link: "https://expressjs.com", experienceInMonths: 6, image: "path/to/expressjs-icon.png" },
        { name: "Socket.IO", link: "https://socket.io", experienceInMonths: 4, image: "path/to/socketio-icon.png" },
        { name: "Tailwind CSS", link: "https://tailwindcss.com", experienceInMonths: 6, image: "path/to/tailwind-icon.png" },
        { name: "Bootstrap", link: "https://getbootstrap.com", experienceInMonths: 6, image: "path/to/bootstrap-icon.png" },
      ],
      databases: [
        { name: "MongoDB", link: "https://www.mongodb.com", experienceInMonths: 6, image: "path/to/mongodb-icon.png" },
      ],
    },
    more:{
        interests: ["Reading", "Photography", "Gaming", "Music", "Travelling"],
        contact: {
            email: "gomzydhingra69@gmail.com",
            linkedin: "www.linkedin.com/in/gomzy-dhingra-4140202b5",
            github: "https://github.com/gomzyyy",
          }
    }
  };
  