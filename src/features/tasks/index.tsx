import { useState } from 'react';

import { hasTasks } from './data';
import { TasksNavigationStack } from './tasks-navigation-stack';
import { Welcome } from './welcome';

export const Tasks = () => {
  const [startWithNewTask, setStartWithNewTask] = useState(false);
  if (hasTasks() || startWithNewTask) {
    return <TasksNavigationStack startWithNewTask={startWithNewTask} />;
  }

  return <Welcome onSubmit={() => setStartWithNewTask(true)} />;
};
