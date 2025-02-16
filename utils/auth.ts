import { storage } from "@/utils/storage";
import { AUTH_TOKEN_KEY } from "@/constants/storage";
import type { AuthData } from "@/types/AuthData";
import type { User } from "@/types/User";
import { getId } from "@/utils/getId";

async function getUser(token?: string | null): Promise<User | null> {
  if (!token) {
    return null;
  }

  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve({
        id: "0",
        name: "Admin",
      });
    }, 1000);
  });
}

async function getToken({ login, password }: AuthData): Promise<string> {
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      if (login === "admin" && password === "admin") {
        resolve(getId());
      } else {
        reject(new Error("Unauthorized"));
      }
    }, 1000);
  });
}

export async function getAuthState() {
  const token = storage.getString(AUTH_TOKEN_KEY) ?? null;
  const user = await getUser(token);

  return {
    user,
    token,
  };
}

export async function authenticate(authData: AuthData) {
  const token = await getToken(authData);
  storage.set(AUTH_TOKEN_KEY, token);
}

export function removeToken() {
  storage.delete(AUTH_TOKEN_KEY);
}
