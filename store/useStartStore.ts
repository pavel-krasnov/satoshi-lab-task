import { create } from "zustand";

type StartState = {
  isReady: boolean;
  tasks: Record<string, boolean>;
  addTask: (id: string) => void;
  finishTask: (id: string) => void;
};

export const useStartStore = create<StartState>((set) => ({
  isReady: false,
  tasks: {},
  addTask: (id: string) => {
    set((state) => ({
      ...state,
      tasks: {
        ...state.tasks,
        [id]: false,
      },
    }));
  },
  finishTask: (id: string) => {
    set((state) => {
      const newState = {
        ...state,
        tasks: {
          ...state.tasks,
          [id]: true,
        },
      };

      const areAllTasksReady = Object.values(newState.tasks).every(
        (isReady) => isReady,
      );

      if (areAllTasksReady) {
        newState.isReady = true;
      }

      return newState;
    });
  },
}));
