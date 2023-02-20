import { View } from "react-native";

export const Spacer = ({ horizontal, space }) => {
  if (horizontal) return <View style={{ marginLeft: space }} />;
  return <View style={{ marginTop: space }} />;
};
