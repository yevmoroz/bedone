import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';

import { useNavigatorScreenOptions } from './hooks';
import { ScreenContainerHOC } from './screen-container';
import { RootStackParamList } from './types';
import { Theme } from '../theme/hooks';
import { Welcome } from '../welcome';

const Stack = createNativeStackNavigator<RootStackParamList>();
const WelcomeScreen = ScreenContainerHOC(Welcome);

export const Navigation: React.FC = () => {
  const screenOptions = useNavigatorScreenOptions(styles);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="welcome" screenOptions={screenOptions}>
        <Stack.Screen
          name="welcome"
          component={WelcomeScreen}
          options={{
            title: '✔BeDone',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = (theme: Theme) =>
  StyleSheet.create({
    header: {
      fontWeight: 'bold',
      color: theme.colors.PRIMARY,
      backgroundColor: theme.colors.ALTERNATE,
    },
  });
