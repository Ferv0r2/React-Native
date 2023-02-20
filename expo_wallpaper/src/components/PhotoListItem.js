import { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { useWindowDimensions } from "react-native";
import { Button } from "./Button";
import { RemoteImage } from "./RemoteImage";

export const PhotoListItem = ({ url }) => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();

  const onPressItem = useCallback(() => {
    navigation.navigate("ImageDetail", { url: url });
  }, []);
  const onPressIn = useCallback(() => {}, []);
  const onPressOut = useCallback(() => {}, []);

  return (
    <Button
      onPress={onPressItem}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      paddingHorizontal={20}
      paddingVertical={10}
    >
      <RemoteImage url={url} width={width - 40} height={width * 1.2} />
    </Button>
  );
};
