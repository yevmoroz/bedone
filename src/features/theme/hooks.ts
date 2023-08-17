import { useColorScheme } from 'react-native';
import type { ColorSchemeName } from 'react-native';

type Colors = {
  PRIMARY: string;
  SECONDARY: string;
  ALTERNATE: string;
};

export type Theme = {
  colors: Colors;
};

export type Themeable<T> = (theme: Theme, colorScheme: ColorSchemeName) => T;

export const useTheme = <T>(themeableStyles: Themeable<T>) => {
  const colorScheme = useColorScheme();

  let colors: Colors;
  if (colorScheme === 'light') {
    colors = require('./light/colors');
  } else if (colorScheme === 'dark') {
    colors = require('./dark/colors');
  } else {
    throw new Error('Unsupported theme');
  }

  const theme: Theme = {
    colors,
  };
  return themeableStyles(theme, colorScheme);
};
