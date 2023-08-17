import { Feather } from '@expo/vector-icons';
import { Fragment, useCallback, useEffect, useState } from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';

import { Button } from '../../button';
import { Spacer } from '../../spacer';
import { Theme, useTheme } from '../../theme/hooks';
import { Heading } from '../../typography/heading';
import { Small } from '../../typography/small';
import { SubHeading } from '../../typography/sub-heading';
import { TaskData, addTask, getTaskById, updateTaskById } from '../data';
import { useTasksNavigation, useTasksRoute } from '../tasks-navigation-stack/hooks';

export const TaskDetails: React.FC = () => {
  const themedStyles = useTheme(styles);
  const { id } = useTasksRoute();
  const { toTasks } = useTasksNavigation();

  const [task, setTask] = useState<TaskData>();
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [edit, setEdit] = useState<boolean>(!id);

  const enterEdit = useCallback(() => {
    setTitle(task?.title ?? '');
    setDescription(task?.description ?? '');
    setEdit(true);
  }, [task]);

  const onSubmit = useCallback(() => {
    let result;
    if (id) {
      result = updateTaskById(id, {
        title,
        description,
        completed: task?.completed ?? false,
      });
    } else {
      result = addTask({ title, description });
      toTasks();
    }
    setTask(result);
    setEdit(false);
  }, [id, title, description]);
  const onComplete = useCallback(() => {
    if (id && task) {
      updateTaskById(id, { ...task, completed: true });
      toTasks();
    }
  }, [id, task]);

  useEffect(() => {
    if (!task && id) {
      setTask(getTaskById(id));
    }
  }, [id]);

  let content;

  if (!task && id) {
    content = <Small>Task is being prepared</Small>;
  } else if (edit) {
    content = (
      <Fragment>
        <TextInput
          style={themedStyles.inputTitle}
          onChangeText={setTitle}
          value={title}
          placeholder="tap to enter title here"
          placeholderTextColor={themedStyles.inputTitle.color}
        />
        <Spacer space={24} />
        <TextInput
          style={themedStyles.inputDescription}
          onChangeText={setDescription}
          value={description}
          multiline
          placeholder="tap to enter description here"
          placeholderTextColor={themedStyles.inputTitle.color}
        />
        <Spacer space={24} />
        <Button onPress={onSubmit}>Submit</Button>
        <Spacer space={24} />
        <Small>Hint: tapping on submit saves the task</Small>
      </Fragment>
    );
  } else if (id && task) {
    content = (
      <Fragment>
        <Pressable onPress={enterEdit}>
          <Heading>{task.title}</Heading>
        </Pressable>
        <Spacer space={24} />
        <Pressable onPress={enterEdit}>
          <SubHeading>{task.description}</SubHeading>
        </Pressable>
        <Spacer space={24} />
        <Button onPress={onComplete}>
          <Feather name="check-circle" size={24} color={themedStyles.checkmark.color} />
          {'\u00A0'}
          Mark as complete
        </Button>
        <Spacer space={24} />
        <Pressable onPress={enterEdit}>
          <Small>Hint: tapping on a text enables it for modifications</Small>
        </Pressable>
      </Fragment>
    );
  }

  return <View style={themedStyles.container}>{content}</View>;
};

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      width: '90%',
    },
    inputTitle: { fontSize: 32, color: theme.colors.PRIMARY, textAlignVertical: 'top' },
    inputDescription: { fontSize: 18, color: theme.colors.PRIMARY, textAlignVertical: 'top' },
    checkmark: {
      color: theme.colors.PRIMARY,
    },
  });
