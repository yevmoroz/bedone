import { NavigationProp, useNavigation } from '@react-navigation/native';

import { TasksNavigationStackParamList } from './stacks';
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
  const { navigate } = useNavigation<NavigationProp<TasksNavigationStackParamList, 'Tasks'>>();

  return {
    toTasks: () => navigate('Tasks'),
    toTaskDetails: (id: string | null) => navigate('TaskDetails', { id }),
  };
};
