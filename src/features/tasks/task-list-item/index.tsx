import { Text } from 'react-native';

type Props = {
  title: string;
};

export const TaskListItem = (props: Props) => {
  return <Text>{props.title}</Text>;
};
