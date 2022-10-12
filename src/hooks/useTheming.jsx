import { useState } from "react";
import { useColorScheme } from "react-native";

const palette = {
  "white": "#fff",
  "black": "#000",
  "blue": "#1676E8",
  "green": "#2CB44D",
  "grayLight": "#4f5666",
  "grayLighter": "#e6e6e6",
  "grayDark": "#3f4451",
  "grayDarker": "#21252b",
  "red": "#DC354A",
  "orange": "#E16017",
  "purple": "#8A06A6",
};

const DEFAULT_ACCENT = palette.blue;

const sizes = {
  borderRadiusBig: 24,
  borderRadiusSmall: 12,
  fontSize: 16,
  fontSizeButton: 18,
  fontSizeHeader: 24,
  fontSizeSmall: 14,
  margin: 12,
  padding: 16,
  paddingButton: 8,
  paddingScreen: 24,
  paddingHiddenNav: 48,
};

const useTheming = () => {
  const [ accent, setAccent ] = useState(DEFAULT_ACCENT);
  const colorScheme = useColorScheme();

  const isDark = () => colorScheme === "dark";

  const inPalette = (color) => Object.keys(palette).includes(color);

  // to protect client components from using a color not in the palette
  const changeAccent = (newColor) => inPalette(newColor) && 
    palette[newColor] !== undefined && setAccent(palette[newColor]);

  // checks to see if a color string is the name of a color in a palette
  // or just a hex color, returning the corresponding hex color if it is in the palette
  const parseColor = (color) => inPalette(color) ? palette[color] : color;

  const background = isDark() ? palette.grayDarker : palette.white;
  const backgroundAlt = isDark() ? palette.grayDark : palette.grayLighter;
  const foreground = isDark() ? palette.white : palette.black;
  const foregroundAlt = isDark() ? palette.grayLight : palette.grayLight;

  // These are little "object bombs" with style attributes. Just expand them in the
  //  style object where you need some boilerplate styling.
  const mixins = {
    commonList: {

    },
    commonListItem: {

    },
    commonListentry: {

    },
  };

  // TODO: Is this how I want to do this, or is there a more organized way?
  return { 
    accent, 
    background,
    backgroundAlt,
    changeAccent,
    foreground,
    foregroundAlt,
    // isDarkMode: colorScheme === "dark", 
    isDarkMode: colorScheme,
    mixins, 
    palette,
    parseColor, 
    ...sizes,
  };
};

export default useTheming;