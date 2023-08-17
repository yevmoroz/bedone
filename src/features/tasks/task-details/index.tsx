import { Feather } from '@expo/vector-icons';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Fragment, useState } from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';

import { Button } from '../../button';
import { Spacer } from '../../spacer';
import { Theme, useTheme } from '../../theme/hooks';
import { Heading } from '../../typography/heading';
import { Small } from '../../typography/small';
import { SubHeading } from '../../typography/sub-heading';
import { TaskData, addTask, getTaskById, updateTaskById } from '../data';
import { TasksNavigationStackParamList } from '../tasks-navigation-stack/stacks';

export const TaskDetails: React.FC = () => {
  const themedStyles = useTheme(styles);
  const route = useRoute<RouteProp<TasksNavigationStackParamList, 'TaskDetails'>>();
  const id = route.params?.id;

  const [task, setTask] = useState<TaskData>();
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const [edit, setEdit] = useState<boolean>(false);

  const enterEdit = () => {
    setTitle(task?.title ?? '');
    setDescription(task?.description ?? '');
    setEdit(true);
  };

  if (id) {
    setTask(getTaskById(id));
  } else if (!edit) {
    setEdit(true);
  }

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
          placeholder="enter title"
        />
        <Spacer space={24} />
        <TextInput
          style={themedStyles.inputDescription}
          onChangeText={setDescription}
          value={description}
          placeholder="enter description"
        />
        <Spacer space={24} />
        <Button
          onPress={() => {
            let result;
            if (id) {
              result = updateTaskById(id, {
                title,
                description,
                completed: task?.completed ?? false,
              });
            } else {
              result = addTask({ title, description });
            }
            setTask(result);
          }}>
          Submit
        </Button>
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
        <Button onPress={() => updateTaskById(id, { ...task, completed: true })}>
          <Feather name="check-circle" size={24} color={themedStyles.checkmark.color} />
          {'\u00A0'}
          Mark as complete
        </Button>
        <Spacer space={12} />
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
    inputTitle: { fontSize: 32, color: theme.colors.PRIMARY },
    inputDescription: { fontSize: 18, color: theme.colors.PRIMARY },
    checkmark: {
      color: theme.colors.PRIMARY,
    },
  });
