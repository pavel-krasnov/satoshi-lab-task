import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "react-native-paper";
import ControlledTextInput from "@/components/form/ControlledTextInput";
import Form from "@/components/form/Form";
import type { Task } from "@/types/Task";
import { getId } from "@/utils/getId";
import { useTaskStore } from "@/store/useTaskStore";
import { useRouter } from "expo-router";

const addSchema = yup.object().shape({
  title: yup.string().required("Name is required"),
});

type TaskFormState = Pick<Task, "title">;

export default function AddForm() {
  const { addTask } = useTaskStore();

  const router = useRouter();

  const { control, handleSubmit } = useForm<TaskFormState>({
    resolver: yupResolver(addSchema),
  });

  const onSubmit = useCallback(
    ({ title }: TaskFormState) => {
      const task: Task = {
        id: getId(),
        title,
        isCompleted: false,
      };

      addTask(task);
      router.replace("/");
    },
    [addTask, router],
  );

  return (
    <Form>
      <ControlledTextInput control={control} name="title" label="Task" />
      <Button mode="contained" onPress={handleSubmit(onSubmit)}>
        Add
      </Button>
    </Form>
  );
}
