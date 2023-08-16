import { Text, View, StyleSheet } from 'react-native';

import { Button } from '../../button';
import { Spacer } from '../../spacer';
import { useTheme, Theme } from '../../theme/hooks';

export const Home: React.FC = () => {
  const themedStyles = useTheme(styles);

  return (
    <View>
      <Text style={themedStyles.text}>Imagine the world of smooth task creation</Text>
      <Spacer space={32} />
      <Button onPress={() => {}}>Start</Button>
    </View>
  );
};

const styles = (theme: Theme) =>
  StyleSheet.create({
    text: {
      fontWeight: 'bold',
      color: theme.colors.PRIMARY,
    },
  });
