import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, Text } from "react-native-paper";
import ControlledTextInput from "@/components/form/ControlledTextInput";
import Form from "@/components/form/Form";
import { StyleSheet } from "react-native";
import type { AuthData } from "@/types/AuthData";
import { useAuthStore } from "@/store/useAuthStore";

const loginSchema = yup.object().shape({
  login: yup.string().required("Name is required"),
  password: yup.string().required("Password is required"),
});

export default function LoginForm() {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<AuthData>({
    resolver: yupResolver(loginSchema),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const { login } = useAuthStore();

  const onSubmit = useCallback(
    async (authData: AuthData) => {
      try {
        setIsSubmitting(true);
        await login(authData);
      } catch (error) {
        let message: string;

        if (error instanceof Error && error.message === "Unauthorized") {
          message = "Invalid credentials.";
        } else {
          message = "Authentication error.";
        }

        setError("root", { message });
      } finally {
        setIsSubmitting(false);
      }
    },
    [login, setError],
  );

  return (
    <Form>
      <Text style={styles.title} variant="titleLarge">
        Sign in
      </Text>
      <Text style={styles.rootError}>{errors.root?.message}</Text>
      <ControlledTextInput
        control={control}
        name="login"
        label="Name"
        disabled={isSubmitting}
      />
      <ControlledTextInput
        control={control}
        name="password"
        label="Password"
        secureTextEntry
        disabled={isSubmitting}
      />
      <Button
        mode="contained"
        onPress={handleSubmit(onSubmit)}
        disabled={isSubmitting}
        loading={isSubmitting}
      >
        Login
      </Button>
    </Form>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
  },
  rootError: {
    color: "red",
  },
});
