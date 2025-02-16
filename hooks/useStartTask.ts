import { useEffect } from "react";
import { useStartStore } from "@/store/useStartStore";

export function useStartTask(id: string, isFinished: boolean) {
  const { addTask, finishTask } = useStartStore();

  useEffect(() => {
    if (isFinished) {
      return;
    }

    addTask(id);

    return () => {
      finishTask(id);
    };
  }, [id, isFinished, addTask, finishTask]);
}
