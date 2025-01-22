import { themeColors } from "@/types";

export const lightTheme:themeColors = {
  border: "#e5e7eb",
  rootBg: "#ffffff",
  rootBgContrastHover:"#e0e0e0",
  containerLv1: "#f4f2f2",
  containerLv2: "#eaeaea",
  containerLv3: "#e0e0e0",
  containerLv4: "#cccccc",
  text: "#000000",
  textInContrast:"#ffffff",
  textLight:"#ffffff",
  textDark:"#000000",
  button: "#111827",
  buttonHover: "#282f3c",
  button1: "#ffffff",
  buttonHover1: "#e5e7eb",
  commonGreen:"#07f76b"
};
export const darkTheme:themeColors = {
  border: "#707070",
  rootBg: "#353535",
  rootBgContrastHover:"#515151",
  containerLv1: "#f4f2f2",
  containerLv2: "#eaeaea",
  containerLv3: "#e0e0e0",
  containerLv4: "#cccccc",
  text: "#a5a5a5",
  textInContrast:"#828282",
  textLight:"#ffffff",
  textDark:"#000000",
  button: "#ffffff",
  buttonHover: "#e5e7eb",
  button1: "#111827",
  buttonHover1: "#282f3c",
commonGreen:"#07f76b"
};
export const comonColors={
  danger:"#fc5555",
  dangerHovered:"#fc4949"
}
export const useTheme = (theme: string | null):themeColors => {
  let colors;
 theme ? theme === "light" ? (colors = lightTheme) : (colors = darkTheme) : (colors = lightTheme);
 return colors;
};
