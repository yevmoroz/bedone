import { SectionList, Text } from 'react-native';

import { getTaskListGrouppedByCompletion } from '../data';
import { TaskListItem } from '../task-list-item';

export const TaskList = () => {
  const grouppedTasks = getTaskListGrouppedByCompletion();

  return (
    <SectionList
      sections={[
        { title: 'Not completed', data: grouppedTasks.open },
        { title: 'Completed', data: grouppedTasks.completed },
      ]}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <TaskListItem key={item.id} title={item.title} />}
      renderSectionHeader={({ section: { title } }) => <Text>{title}</Text>}
    />
  );
};
