import { StyleSheet, Text } from 'react-native';

import { Theme, useTheme } from '../../theme/hooks';

export const SubHeading = <P extends object>(props: P) => {
  const themedStyles = useTheme(styles);

  return <Text {...props} style={themedStyles.text} />;
};

const styles = (theme: Theme) =>
  StyleSheet.create({
    text: {
      fontSize: 18,
      lineHeight: 27,
      letterSpacing: 1,
      color: theme.colors.PRIMARY,
    },
  });
