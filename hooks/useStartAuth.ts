import { useAuthStore } from "@/store/useAuthStore";
import { useStartTask } from "@/hooks/useStartTask";

export function useStartAuth() {
  const { isReady } = useAuthStore();

  return useStartTask("auth", isReady);
}
