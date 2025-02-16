import type { Task } from "@/types/Task";
import { Text } from "react-native-paper";
import { StyleSheet } from "react-native";
import { Pressable } from "react-native-gesture-handler";
import { useEditingContext } from "@/components/todo-list/EditingIdProvider";
import { useCallback } from "react";
import { textStyles } from "@/components/todo-list/title/style";

type Props = Pick<Task, "title" | "isCompleted" | "id">;

export default function TextTitle({ isCompleted, title, id }: Props) {
  const { setEditing } = useEditingContext();

  const onEdit = useCallback(() => {
    setEditing(id);
  }, [id, setEditing]);

  return (
    <Pressable style={styles.pressable} onPress={onEdit}>
      <Text style={[textStyles.text, isCompleted ? styles.completed : null]}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    flex: 1,
  },
  completed: {
    textDecorationLine: "line-through",
  },
});
