import type { Task } from "@/types/Task";
import EditingTitle from "@/components/todo-list/title/EditingTitle";
import { useEditingContext } from "@/components/todo-list/EditingIdProvider";
import TextTitle from "@/components/todo-list/title/TextTitle";

type Props = Pick<Task, "title" | "isCompleted" | "id">;

export default function PressableTitle({ isCompleted, title, id }: Props) {
  const { editingId } = useEditingContext();
  const isEditing = editingId === id;

  if (isEditing) {
    return <EditingTitle id={id} title={title} />;
  }

  return <TextTitle isCompleted={isCompleted} title={title} id={id} />;
}
