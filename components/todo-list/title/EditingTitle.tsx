import { TextInput } from "react-native";
import type { Task } from "@/types/Task";
import { useCallback, useEffect, useRef, useState } from "react";
import { useTaskStore } from "@/store/useTaskStore";
import { useEditingContext } from "@/components/todo-list/EditingIdProvider";
import { useBackHandler } from "@react-native-community/hooks";
import { textStyles } from "@/components/todo-list/title/style";

type Props = Pick<Task, "title" | "id">;

export default function EditingTitle({ title, id }: Props) {
  const [input, setInput] = useState(title);
  const { editTask } = useTaskStore();
  const { clearEditing } = useEditingContext();
  const lastInput = useRef(input);

  const onChange = useCallback((value: string) => {
    setInput(value);
    lastInput.current = value;
  }, []);

  const save = useCallback(() => {
    editTask(id, {
      title: lastInput.current,
    });
  }, [id, editTask]);

  useBackHandler(() => {
    clearEditing();

    return true;
  });

  useEffect(() => save, [save]);

  return (
    <TextInput
      style={textStyles.text}
      value={input}
      onChangeText={onChange}
      autoFocus={true}
      onBlur={clearEditing}
      onSubmitEditing={clearEditing}
    />
  );
}
