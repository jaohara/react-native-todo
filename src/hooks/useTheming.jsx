import { useState } from "react";
import { useColorScheme } from "react-native";

const palette = {
  "white": "#fff",
  "black": "#000",
  "blue": "#1676E8",
  "green": "#2CB44D",
  "red": "#DC354A",
  "orange": "#E16017",
  "purple": "#8A06A6",
};

const DEFAULT_ACCENT = palette.blue;

const sizes = {
  borderRadiusBig: 24,
  borderRadiusSmall: 12,
  fontSize: 14,
  fontSizeHeader: 24,
  margin: 12,
  padding: 16,
  paddingScreen: 24,
};

const useTheming = () => {
  const [ accent, setAccent ] = useState(DEFAULT_ACCENT);
  const colorScheme = useColorScheme();

  const background = colorScheme === "dark" ? palette.black : palette.white;
  const foreground = colorScheme === "dark" ? palette.white : palette.black;


  // TODO: Is this how I want to do this, or is there a more organized way?
  return { 
    accent, 
    background,
    foreground,
    // isDarkMode: colorScheme === "dark", 
    isDarkMode: colorScheme, 
    palette, 
    ...sizes,
  };
};

export default useTheming;