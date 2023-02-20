import { Image } from "react-native";

export const RemoteImage = ({ url, style, width, height }) => {
  return (
    <Image
      source={{ uri: url }}
      style={[style, { width: width, height: height }]}
    />
  );
};
