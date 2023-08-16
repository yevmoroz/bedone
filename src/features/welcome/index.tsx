import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet } from 'react-native';

import { Button } from '../button';
import { Spacer } from '../spacer';
import { useTheme, Theme } from '../theme/hooks';
import { Heading } from '../typography/heading';
import { SubHeading } from '../typography/sub-heading';

export const Welcome: React.FC = () => {
  const themedStyles = useTheme(styles);

  return (
    <View style={themedStyles.container}>
      <Heading>
        <Ionicons name="md-checkmark-circle" size={32} color="green" />
        BeDone
      </Heading>
      <Spacer space={12} />
      <SubHeading>Imagine the world of smooth task creation</SubHeading>
      <Spacer space={32} />
      <Button onPress={() => {}}>Start here</Button>
    </View>
  );
};

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
    },
    text: {
      fontWeight: 'bold',
      color: theme.colors.PRIMARY,
    },
  });
