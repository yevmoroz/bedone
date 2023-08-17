import { customAlphabet } from 'nanoid/non-secure';

const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789', 10);

export type TaskDataMin = {
  id: string;
  title: string;
};

export type TaskData = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
};

const data: Record<string, Omit<TaskData, 'id'>> = {};

export const hasTasks = (): boolean => Object.keys(data).length > 0;

export const getTaskListGrouppedByCompletion = (): Record<'completed' | 'open', TaskDataMin[]> => {
  const grouppedByCompletion: Record<'completed' | 'open', TaskDataMin[]> = {
    completed: [],
    open: [],
  };
  Object.keys(data).forEach((id) => {
    grouppedByCompletion[data[id].completed ? 'completed' : 'open'].push({
      id,
      title: data[id].title,
    });
  });
  return grouppedByCompletion;
};

export const getTaskById = (id: string): TaskData => {
  if (!data[id]) {
    throw new Error('No task for given id');
  }
  return { id, ...data[id] };
};

export const addTask = (payload: Omit<TaskData, 'id' | 'completed'>): TaskData => {
  const id = nanoid();
  data[id] = { ...payload, completed: false };

  return { id, ...data[id] };
};

export const updateTaskById = (id: string, payload: Omit<TaskData, 'id'>): TaskData => {
  if (!data[id]) {
    throw new Error('No task for given id');
  }

  data[id] = { ...data[id], ...payload };

  return { id, ...data[id] };
};

export const inspiration = () => {
  addTask({
    title: 'Look outside your window',
    description: 'Nature is beautiful, try embracing it',
  });
  addTask({
    title: 'Get coffee',
    description: 'Long known drink that stimulates the brain. Consider yerba mate for change',
  });
  addTask({
    title: 'Check on your collegues',
    description: 'There are stories to tell, no doubt there is plenty to share',
  });
};
