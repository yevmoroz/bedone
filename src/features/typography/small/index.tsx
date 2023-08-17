import { StyleSheet, Text } from 'react-native';

import { Theme, useTheme } from '../../theme/hooks';

export const Small = <P extends object>(props: P) => {
  const themedStyles = useTheme(styles);

  return <Text {...props} style={themedStyles.text} />;
};

const styles = (theme: Theme) =>
  StyleSheet.create({
    text: {
      fontSize: 12,
      color: theme.colors.PRIMARY,
    },
  });
