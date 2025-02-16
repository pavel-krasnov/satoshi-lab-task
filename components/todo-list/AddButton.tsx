import { FAB } from "react-native-paper";
import { Link } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useMemo } from "react";
import { StyleSheet } from "react-native";

export default function AddButton() {
  const { bottom, right } = useSafeAreaInsets();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        wrapper: {
          position: "absolute",
          bottom: bottom + 16,
          right: right + 16,
        },
      }),
    [bottom, right],
  );

  return (
    <Link href="/add" style={styles.wrapper}>
      <FAB icon="plus" />
    </Link>
  );
}
