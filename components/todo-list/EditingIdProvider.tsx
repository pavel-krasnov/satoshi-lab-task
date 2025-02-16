import React, {
  createContext,
  useContext,
  useState,
  type PropsWithChildren,
  useCallback,
} from "react";
import type { Task } from "@/types/Task";

type EditingIdContextType = {
  setEditing: (id: Task["id"]) => void;
  clearEditing: VoidFunction;
  editingId: Task["id"] | null;
};

const EditingIdContext = createContext<EditingIdContextType | undefined>(
  undefined,
);

export default function EditingIdProvider({ children }: PropsWithChildren) {
  const [editingId, setEditingId] = useState<string | null>(null);

  const setEditing = useCallback((id: Task["id"]) => {
    setEditingId(id);
  }, []);

  const clearEditing = useCallback(() => {
    setEditingId(null);
  }, []);

  const value = {
    setEditing,
    clearEditing,
    editingId,
  };

  return (
    <EditingIdContext.Provider value={value}>
      {children}
    </EditingIdContext.Provider>
  );
}

export const useEditingContext = () => {
  const context = useContext(EditingIdContext);

  if (!context) {
    throw new Error(
      "useEditingContext must be used within an EditingIdProvider",
    );
  }

  return context;
};
