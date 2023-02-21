import { useCallback, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Animated, Easing, useWindowDimensions } from "react-native";
import { Button } from "./Button";
import { RemoteImage } from "./RemoteImage";

export const PhotoListItem = ({ url }) => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();
  const [animateValue] = useState(new Animated.Value(0));

  const onPressItem = useCallback(() => {
    navigation.navigate("ImageDetail", { url: url });
  }, []);
  const onPressIn = useCallback(() => {
    Animated.timing(animateValue, {
      duration: 200,
      toValue: 1,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, []);
  const onPressOut = useCallback(() => {
    Animated.timing(animateValue, {
      duration: 200,
      toValue: 0,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, []);
  const scale = animateValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1.0, 0.95],
  });

  return (
    <Button
      onPress={onPressItem}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      paddingHorizontal={20}
      paddingVertical={10}
    >
      <Animated.View
        style={{
          transform: [{ scale: scale }],
        }}
      >
        <RemoteImage url={url} width={width - 40} height={width * 1.2} />
      </Animated.View>
    </Button>
  );
};
