export interface NavFeaturesType {
  name: string;
  action: () => any;
  navigation: string;
}
export interface ImageProps {
  height?: number;
  width?: number;
  className?: string;
}

export interface Skill {
  name: string;
  link: string;
  experienceInMonths: number;
  image: string;
}

export interface Contact {
  email: string;
  linkedin: string;
  github: string;
}

export interface More {
  interests: string[];
  contact: Contact;
}

export interface ProfileType {
  name: string;
  action:(callback:()=>any)=>any;
  image:({height,width}:ImageProps)=>React.JSX.Element;
  label: string;
  dateOfBirth: string;
  bio: string;
  extendedBio: string;
  journey: string;
  skills: {
    languages: Skill[];
    versionControl: Skill[];
    stateManagement: Skill[];
    frameworksAndLibraries: Skill[];
    databases: Skill[];
  };
  more: More;
}
