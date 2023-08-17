import { useState } from 'react';

import { TasksNavigationStack } from './tasks-navigation-stack';
import { Welcome } from './welcome';
import { ScreenContainerHOC } from '../screen-container';

export const WelcomeScreen = ScreenContainerHOC(Welcome);

export const Tasks = () => {
  const [startWith, setStartWith] = useState<'TaskDetails' | 'Tasks'>();
  if (startWith) {
    return <TasksNavigationStack startWith={startWith} />;
  }

  return <WelcomeScreen onRedirect={(nextRoute) => setStartWith(nextRoute)} />;
};
