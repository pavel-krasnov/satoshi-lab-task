export type Task = {
  id: string;
  title: string;
  isCompleted: boolean;
};

export type EditableFields = Partial<Omit<Task, "id">>;
