import { Feather } from '@expo/vector-icons';
import { View, StyleSheet } from 'react-native';

import { Button } from '../../button';
import { Spacer } from '../../spacer';
import { useTheme, Theme } from '../../theme/hooks';
import { Heading } from '../../typography/heading';
import { SubHeading } from '../../typography/sub-heading';
import { inspiration } from '../data';

type Props = {
  onRedirect: (inspire: 'TaskDetails' | 'Tasks') => void;
};

export const Welcome: React.FC<Props> = (props) => {
  const themedStyles = useTheme(styles);

  return (
    <View style={themedStyles.container}>
      <Heading>
        <Feather name="check-circle" size={24} color={themedStyles.checkmark.color} />
        {'\u00A0'}
        BeDone
      </Heading>
      <Spacer space={12} />
      <SubHeading>Imagine the world of smooth task creation</SubHeading>
      <Spacer space={32} />
      <Button onPress={() => props.onRedirect('TaskDetails')}>Start clean</Button>
      <Spacer space={12} />
      <Button
        onPress={() => {
          inspiration();
          props.onRedirect('Tasks');
        }}>
        Inspire me
      </Button>
    </View>
  );
};

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
    },
    checkmark: {
      color: theme.colors.PRIMARY,
    },
  });
