import { Icon } from "react-native-paper";
import Animated, {
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { StyleSheet, View } from "react-native";

type Props = {
  translation: SharedValue<number>;
};

const BUTTON_WIDTH = 50;

export default function SwipeToDelete({ translation }: Props) {
  const animatedActionStyles = useAnimatedStyle(() => {
    const translateValue = translation.get();
    const translateX = translateValue + BUTTON_WIDTH;

    return {
      transform: [{ translateX }],
    };
  });

  return (
    <View style={styles.wrapper}>
      <Animated.View style={animatedActionStyles}>
        <Icon size={25} source="delete" />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "salmon",
  },
  button: {
    width: BUTTON_WIDTH,
  },
});
