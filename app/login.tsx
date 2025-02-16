import { KeyboardAvoidingView, StyleSheet } from "react-native";
import LoginForm from "@/components/LoginForm";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginPage() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={16}>
        <LoginForm />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: "center",
  },
});
