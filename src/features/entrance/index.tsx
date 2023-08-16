import { NavigationContainer } from '@react-navigation/native';

import { Tasks } from '../tasks';

export const Entrance: React.FC = () => {
  return (
    <NavigationContainer>
      <Tasks />
    </NavigationContainer>
  );
};
