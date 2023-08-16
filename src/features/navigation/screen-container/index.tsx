import { View, StyleSheet } from 'react-native';

import { useTheme, Theme } from '../../theme/hooks';

export const ScreenContainerHOC =
  <P extends object>(Component: React.FC<P>) =>
  (props: P) => {
    const themedStyles = useTheme(styles);
    return (
      <View style={themedStyles.container}>
        <Component {...props} />
      </View>
    );
  };

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.SECONDARY,
    },
  });
