import { type PropsWithChildren, useEffect } from "react";
import { useRouter, useSegments } from "expo-router";
import { useAuthStore } from "@/store/useAuthStore";

const protectedRoutes = ["/", "/add"];

const AuthWrapper = ({ children }: PropsWithChildren) => {
  const { isReady, user } = useAuthStore();
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    const currentRoute = `/${segments.join("/")}`;

    if (isReady && !user && protectedRoutes.includes(currentRoute)) {
      router.replace("/login");
    }

    if (user && currentRoute === "/login") {
      router.replace("/");
    }
  }, [user, router, segments, isReady]);

  return children;
};

export default AuthWrapper;
