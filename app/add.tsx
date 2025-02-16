import AddForm from "@/components/AddForm";
import { StyleSheet, View } from "react-native";

export default function AddPage() {
  return (
    <View style={styles.wrapper}>
      <AddForm />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
});
