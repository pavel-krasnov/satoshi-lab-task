import { ComponentProps, useCallback } from "react";
import { ListRenderItem, StyleSheet, useWindowDimensions } from "react-native";
import type { Task } from "@/types/Task";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import { Checkbox } from "react-native-paper";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useTaskStore } from "@/store/useTaskStore";
import PressableTitle from "@/components/todo-list/title/PressableTitle";
import SwipeToDelete from "@/components/todo-list/SwipeToDelete";

type Props = ComponentProps<ListRenderItem<Task>>;

export default function TaskItem({ item }: Props) {
  const { toggleComplete, removeTask } = useTaskStore();
  const { isCompleted, title, id } = item;
  const { width } = useWindowDimensions();

  const onComplete = useCallback(() => {
    toggleComplete(id);
  }, [id, toggleComplete]);

  const onRemove = useCallback(() => {
    removeTask(id);
  }, [id, removeTask]);

  return (
    <GestureHandlerRootView>
      <Swipeable
        childrenContainerStyle={styles.wrapper}
        renderRightActions={(_progress, translation) => (
          <SwipeToDelete translation={translation} />
        )}
        rightThreshold={width / 3}
        onSwipeableWillOpen={onRemove}
      >
        <Checkbox.Android
          status={isCompleted ? "checked" : "unchecked"}
          onPress={onComplete}
        />
        <PressableTitle id={id} title={title} isCompleted={isCompleted} />
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
  },
});
