import { create } from "zustand";
import type { User } from "@/types/User";
import type { AuthData } from "@/types/AuthData";
import { authenticate, getAuthState, removeToken } from "@/utils/auth";
import { useTaskStore } from "@/store/useTaskStore";

type AuthState = {
  isReady: boolean;
  user: User | null;
  token: string | null;
  login: (authData: AuthData) => Promise<void>;
  logout: VoidFunction;
};

export const useAuthStore = create<AuthState>((set) => {
  const resolveAuthState = async () => {
    const authState = await getAuthState();
    set(authState);

    if (authState.user?.id) {
      useTaskStore.persist.setOptions({ name: authState.user.id });
      useTaskStore.persist.rehydrate();
    }
  };

  (async () => {
    try {
      await resolveAuthState();
    } catch (error) {
      console.error(error);
    } finally {
      set({ isReady: true });
    }
  })();

  return {
    isReady: false,
    user: null,
    token: null,
    login: async (authData: AuthData) => {
      await authenticate(authData);
      await resolveAuthState();
    },
    logout: () => {
      set({ user: null, token: null });
      removeToken();
      useTaskStore.persist.setOptions({ name: "" });
    },
  };
});
