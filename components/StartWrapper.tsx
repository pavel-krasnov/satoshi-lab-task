import type { PropsWithChildren } from "react";
import Loader from "@/components/Loader";
import { useStartStore } from "@/store/useStartStore";
import { useStartFonts } from "@/hooks/useStartFonts";
import { useStartAuth } from "@/hooks/useStartAuth";

export const StartWrapper = ({ children }: PropsWithChildren) => {
  const { isReady } = useStartStore();

  useStartFonts();

  useStartAuth();

  return isReady ? children : <Loader size="large" />;
};
