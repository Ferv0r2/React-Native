import { View } from "react-native";

export const HeaderGroup = ({ children }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      {children}
    </View>
  );
};
