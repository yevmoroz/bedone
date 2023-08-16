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

export const getTaskById = (id: string): TaskData | null => {
  if (!data[id]) {
    return null;
  }
  return { id, ...data[id] };
};

export const updateTaskById = (id: string, payload: Omit<TaskData, 'id'>): TaskData => {
  if (!data[id]) {
    throw new Error('No task for given id');
  }

  data[id] = { ...data[id], ...payload };

  return { id, ...data[id] };
};
