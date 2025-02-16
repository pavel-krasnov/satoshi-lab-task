import { type ComponentProps } from "react";
import { Controller, type FieldValues } from "react-hook-form";
import TextInput from "@/components/TextInput";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

type Props<TValues extends FieldValues> = Omit<
  ComponentProps<typeof Controller<TValues>>,
  "render"
> &
  Pick<
    ComponentProps<typeof TextInput>,
    "label" | "secureTextEntry" | "disabled"
  >;

export default function ControlledTextInput<TValues extends FieldValues>(
  props: Props<TValues>,
) {
  const { label, secureTextEntry, disabled, ...controllerProps } = props;

  return (
    <Controller
      {...controllerProps}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <View style={styles.wrapper}>
          <TextInput
            label={label}
            mode="outlined"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            secureTextEntry={secureTextEntry}
            error={!!error}
            disabled={disabled}
          />
          {error && <Text style={styles.error}>{error.message}</Text>}
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingBottom: 20,
  },
  error: {
    position: "absolute",
    bottom: 0,
    left: 0,
    color: "red",
    marginTop: 5,
  },
});
