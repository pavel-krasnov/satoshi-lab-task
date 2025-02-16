import { StyleSheet, View } from "react-native";
import Todo from "@/components/todo-list/Todo";

export default function TodoPage() {
  return (
    <View style={styles.wrapper}>
      <Todo />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 16,
  },
  logoutButtonWrapper: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
