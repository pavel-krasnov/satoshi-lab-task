import { TextInput as PaperTextInput } from "react-native-paper";
import { ComponentProps } from "react";

type Props = ComponentProps<typeof PaperTextInput>;

export default function TextInput(props: Props) {
  return <PaperTextInput {...props} />;
}
