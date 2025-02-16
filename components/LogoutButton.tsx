import { IconButton } from "react-native-paper";
import { useAuthStore } from "@/store/useAuthStore";

export function LogoutButton() {
  const { logout } = useAuthStore();

  return <IconButton icon="logout" onPress={logout} />;
}
