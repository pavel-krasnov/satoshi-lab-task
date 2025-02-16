import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { StartWrapper } from "@/components/StartWrapper";
import { Stack } from "expo-router";
import AuthWrapper from "@/components/AuthWrapper";
import { LogoutButton } from "@/components/LogoutButton";

export default function RootLayout() {
  return (
    <StartWrapper>
      <AuthWrapper>
        <Stack>
          <Stack.Screen
            name="index"
            options={{ title: "Tasks", headerRight: () => <LogoutButton /> }}
          />
          <Stack.Screen name="login" options={{ headerShown: false }} />
          <Stack.Screen name="add" options={{ title: "Add Task" }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </AuthWrapper>
      <StatusBar style="auto" />
    </StartWrapper>
  );
}
