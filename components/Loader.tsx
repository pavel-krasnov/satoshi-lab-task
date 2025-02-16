import { StyleSheet, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import type { ComponentProps } from "react";

type Props = ComponentProps<typeof ActivityIndicator>;

export default function Loader(props: Props) {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});
