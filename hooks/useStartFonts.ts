import { useFonts } from "expo-font";
import { useStartTask } from "@/hooks/useStartTask";

export function useStartFonts() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useStartTask("fonts", loaded);
}
