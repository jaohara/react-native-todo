import { useState } from "react";

const palette = {
  "white": "#fff",
  "black": "#000",
  "blue": "#1676E8",
  "green": "#2CB44D",
  "red": "#DC354A",
  "orange": "#E16017",
  "purple": "#8A06A6",
};

const sizes = {
  borderRadius: 24,
  borderRadiusSmall: 12,
  fontSize: 14,
  fontSizeHeader: 24,
  margin: 12,
  padding: 16,
  paddingScreen: 24,
};

const useTheming = () => {
  const [ accent, setAccent ] = useState(palette.blue);
  const [ isDarkMode, setIsDarkMode ] = useState(false);
  const background = isDarkMode ? palette.black : palette.white;
  const foreground = isDarkMode ? palette.white : palette.black;


  // TODO: Is this how I want to do this, or is there a more organized way?
  return { 
    accent, 
    background,
    foreground,
    isDarkMode, 
    palette, 
    sizes, 
  };
};

export default useTheming;