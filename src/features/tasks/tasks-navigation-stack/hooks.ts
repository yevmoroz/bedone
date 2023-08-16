import { NavigationProp, useNavigation } from '@react-navigation/native';

import { RootStackParamList } from './stacks';
import { Themeable, useTheme } from '../../theme/hooks';

export const useNavigatorScreenOptions = <T extends { header: any }>(styles: Themeable<T>) => {
  const themedStyles = useTheme(styles);
  const screenOptions = {
    headerShown: true,
    headerStyle: {
      backgroundColor: themedStyles.header.backgroundColor,
    },
    headerTintColor: themedStyles.header.color,
    headerTitleStyle: {
      fontWeight: themedStyles.header.fontWeight,
    },
  };

  return screenOptions;
};

export const useTasksNavigation = () => {
  const { navigate } = useNavigation<NavigationProp<RootStackParamList, 'Tasks'>>();

  return {
    toTasks: () => navigate('Tasks'),
    toTaskDetails: () => navigate('TaskDetails'),
  };
};
