import { Pressable } from "react-native";

export const Button = ({
  onPress,
  onPressIn,
  onPressOut,
  hitSlop,
  paddingHorizontal,
  paddingVertical,
  children,
}) => {
  return (
    <Pressable
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={onPress}
      hitSlop={hitSlop ?? { left: 0, right: 0, top: 0, bottom: 0 }}
      style={{
        paddingHorizontal: paddingHorizontal,
        paddingVertical: paddingVertical,
      }}
    >
      {children}
    </Pressable>
  );
};
