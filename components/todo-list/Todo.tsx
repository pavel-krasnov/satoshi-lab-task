import TaskList from "@/components/todo-list/TaskList";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { useTaskStore } from "@/store/useTaskStore";
import AddButton from "@/components/todo-list/AddButton";

export default function Todo() {
  const { tasks } = useTaskStore();
  const taskArray = Object.values(tasks);
  const areTasksEmpty = taskArray.length === 0;

  return (
    <View style={styles.wrapper}>
      {areTasksEmpty && (
        <Text variant="bodyLarge" style={styles.text}>
          You don't have any tasks yet. Start by pressing +
        </Text>
      )}
      {!areTasksEmpty && <TaskList tasks={taskArray} />}
      <AddButton />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
  },
});
