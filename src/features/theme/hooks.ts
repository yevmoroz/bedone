import { useColorScheme } from 'react-native';
import type { ColorSchemeName } from 'react-native';

export type Theme = {
  colors: {
    DARK: string;
    LIGHT: string;
    PRIMARY: string;
    SECONDARY: string;
  };
};

export const useTheme = <T>(themeableStyles: (theme: Theme, colorScheme: ColorSchemeName) => T) => {
  const colorScheme = useColorScheme();

  let colors = null;
  if (colorScheme === 'light') {
    colors = require('./light/colors');
  } else if (colorScheme === 'dark') {
    colors = require('./dark/colors');
  } else {
    throw new Error('Unsupported theme');
  }

  const theme: Theme = {
    // @ts-expect-error colors needs typing
    colors,
  };
  return themeableStyles(theme, colorScheme);
};
