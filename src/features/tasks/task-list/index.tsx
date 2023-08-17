import { Feather } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native';
import { Fragment, useEffect, useState } from 'react';
import { Pressable, SectionList, StyleSheet, Text, View } from 'react-native';

import { Button } from '../../button';
import { Spacer } from '../../spacer';
import { Theme, useTheme } from '../../theme/hooks';
import { TaskDataMin, getTaskListGrouppedByCompletion } from '../data';
import { useTasksNavigation } from '../tasks-navigation-stack/hooks';

const EMPTY_ARRAY = [];

type TaskListSection = { data: TaskDataMin[]; completed: boolean };

export const TaskList = () => {
  const themedStyles = useTheme(styles);
  const [data, setData] = useState<TaskListSection[]>(EMPTY_ARRAY);
  const { toTaskDetails } = useTasksNavigation();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      const grouppedTasks = getTaskListGrouppedByCompletion();
      setData([
        { data: grouppedTasks.open, completed: false },
        { data: grouppedTasks.completed, completed: true },
      ]);
    }
  }, [isFocused]);

  return (
    <Fragment>
      <Spacer space={12} />
      <View style={themedStyles.container}>
        <Button onPress={() => toTaskDetails(null)}>Add Task</Button>
      </View>
      <Spacer space={24} />
      <SectionList
        style={themedStyles.container}
        sections={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item, section }) => (
          <Pressable onPress={() => toTaskDetails(item.id)}>
            <View style={themedStyles.taskListItem}>
              <Text key={item.id} style={themedStyles.taskListItemText}>
                <Feather
                  name={`${section.completed ? 'check-' : ''}circle`}
                  size={12}
                  color={themedStyles.taskListItemText.color}
                />
                {'\u00A0'}
                {item.title}
              </Text>
            </View>
          </Pressable>
        )}
        renderSectionHeader={({ section }) => {
          const title = section.completed ? 'Completed' : 'Not Completed';
          let content = <Text style={themedStyles.title}>{title}</Text>;

          if (section.data.length === 0) {
            content = (
              <Fragment>
                {content}
                <Text style={themedStyles.emptyTasks}>...no tasks here yet</Text>
              </Fragment>
            );
          }
          return content;
        }}
      />
    </Fragment>
  );
};

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      width: '90%',
    },
    title: {
      color: theme.colors.PRIMARY,
      fontWeight: 'bold',
    },
    taskListItem: {
      margin: 12,
      padding: 12,
      borderRadius: 3,
      backgroundColor: theme.colors.ALTERNATE,
    },
    taskListItemText: {
      color: theme.colors.PRIMARY,
    },
    emptyTasks: {
      marginLeft: 12,
      marginTop: 12,
      marginBottom: 12,
      color: theme.colors.PRIMARY,
    },
  });
