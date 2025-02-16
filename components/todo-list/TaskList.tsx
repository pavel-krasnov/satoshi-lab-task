import { FlatList } from "react-native";
import type { Task } from "@/types/Task";
import TaskItem from "@/components/todo-list/TaskItem";
import EditingIdProvider from "@/components/todo-list/EditingIdProvider";
import { Divider } from "react-native-paper";

type Props = {
  tasks: Task[];
};

export default function TaskList({ tasks }: Props) {
  return (
    <EditingIdProvider>
      <FlatList
        data={tasks}
        renderItem={(itemInfo) => <TaskItem {...itemInfo} />}
        ItemSeparatorComponent={Divider}
      />
    </EditingIdProvider>
  );
}
