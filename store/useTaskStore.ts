import { create } from "zustand";
import type { EditableFields, Task } from "@/types/Task";
import { createJSONStorage, persist } from "zustand/middleware";
import { storage } from "@/utils/storage";

type TodoState = {
  tasks: Record<string, Task>;
  addTask: (task: Task) => void;
  removeTask: (id: Task["id"]) => void;
  toggleComplete: (id: Task["id"]) => void;
  editTask: (id: Task["id"], properties: EditableFields) => void;
};

export const useTaskStore = create<TodoState>()(
  persist(
    (set, get) => ({
      tasks: {},
      addTask: (task) =>
        set((state) => ({ tasks: { ...state.tasks, [task.id]: task } })),
      removeTask: (id) => {
        set((state) => {
          const newState = { ...state };
          delete newState.tasks[id];

          return newState;
        });
      },
      toggleComplete: (id) => {
        set((state) => {
          if (!state.tasks[id]) {
            return state;
          }

          const newState = { ...state };
          state.tasks[id].isCompleted = !state.tasks[id].isCompleted;

          return newState;
        });
      },
      editTask: (id, properties) => {
        set((state) => {
          if (!state.tasks[id]) {
            return state;
          }

          const newState = { ...state };

          newState.tasks[id] = {
            ...state.tasks[id],
            ...properties,
          };

          return newState;
        });
      },
    }),
    {
      name: "",
      storage: createJSONStorage(() => ({
        getItem: (key: string) => storage.getString(key) ?? null,
        setItem: (key: string, value: string) => storage.set(key, value),
        removeItem: (key: string) => storage.delete(key),
      })),
    },
  ),
);
