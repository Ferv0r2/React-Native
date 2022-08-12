import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import StackNavigator from "./navigations/StackNavigator";

import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

import Loading from "./screens/Loading";

const App = () => {
  // const [isLoading, setIsLoading] = useState(true);

  // const loadFont = () => {
  //   setTimeout(async () => {
  //     await Font.loadAsync({
  //       Roboto: require("native-base/Fonts/Roboto.ttf"),
  //       Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
  //       ...Ionicons.font,
  //     });
  //     await setIsLoading(false);
  //   }, 1000);
  // };

  // useEffect(() => {
  //   loadFont();
  // }, []);

  // if (isLoading) return <Loading />;

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
      {/* <MainScreen /> */}
    </NativeBaseProvider>
  );
};

export default App;
