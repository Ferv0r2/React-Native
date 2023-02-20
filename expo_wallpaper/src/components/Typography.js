import { Text } from "react-native";

export const Typography = ({ color, fontSize, children }) => {
  return (
    <Text
      style={{
        color: color,
        fontSize: fontSize,
      }}
    >
      {children}
    </Text>
  );
};
