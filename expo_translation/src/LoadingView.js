import { View } from "react-native";
import LottieView from "lottie-react-native";
import { useEffect, useRef } from "react";

export default () => {
  const animation = useRef(null);

  //   useEffect(() => {
  //     setTimeout(() => {
  //       animation.current?.play();
  //     }, 1000);
  //   }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 200,
        }}
        source={require("../assets/loading.json")}
      />
    </View>
  );
};
