import { Text, View } from 'react-native';

import { Button } from '../../button';

export const TaskDetails = () => {
  return (
    <View>
      <Text>Title</Text>
      <Text>Description</Text>
      <Text>Hint: tapping on text enables it for modifications</Text>
      <Button onPress={() => {}}>Mark as complete</Button>
    </View>
  );
};
