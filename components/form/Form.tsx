import { StyleSheet, View } from "react-native";
import type { PropsWithChildren } from "react";

export default function Form({ children }: PropsWithChildren) {
  return <View style={styles.form}>{children}</View>;
}

const styles = StyleSheet.create({
  form: {
    gap: 10,
  },
});
