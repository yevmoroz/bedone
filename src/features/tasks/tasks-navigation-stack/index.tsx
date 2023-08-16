import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';

import { useNavigatorScreenOptions } from './hooks';
import { RootStackParamList } from './stacks';
import { ScreenContainerHOC } from '../../screen-container';
import { Theme } from '../../theme/hooks';
import { TaskDetails } from '../task-details';
import { TaskList } from '../task-list';

const TasksStack = createNativeStackNavigator<RootStackParamList>();
const TaskListScreen = ScreenContainerHOC(TaskList);
const TaskDetailsScreen = ScreenContainerHOC(TaskDetails);

type Props = {
  startWithNewTask: boolean;
};

export const TasksNavigationStack: React.FC<Props> = (props) => {
  const screenOptions = useNavigatorScreenOptions(styles);
  const initialRouteName = props.startWithNewTask ? 'TaskDetails' : 'Tasks';

  return (
    <TasksStack.Navigator initialRouteName={initialRouteName} screenOptions={screenOptions}>
      <TasksStack.Screen
        name="Tasks"
        component={TaskListScreen}
        options={{
          title: 'All Tasks',
        }}
      />
      <TasksStack.Screen
        name="TaskDetails"
        component={TaskDetailsScreen}
        options={{
          title: 'Task Details',
        }}
      />
    </TasksStack.Navigator>
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
