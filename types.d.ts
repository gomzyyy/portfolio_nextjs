export interface themeColors{
  border: string;
  rootBg: string;
  rootBgContrastHover:string;
  containerLv1: string;
  containerLv2: string;
  containerLv3: string;
  containerLv4: string;
  text: string;
  textLight:string;
  textDark:string;
  textInContrast:string;
  button: string;
  buttonHover: string;
  button1: string;
  buttonHover1: string;
}

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
  themeColor:string;
  bgColor:string;
  description:string;
  projectCount:number;
  textColor:string;
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
