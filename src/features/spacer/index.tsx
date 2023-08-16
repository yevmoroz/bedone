import { View } from 'react-native';

type Props = {
  space: 32 | 24 | 16 | 12;
};

export const Spacer = (props: Props) => {
  return <View style={{ marginTop: props.space }} />;
};
