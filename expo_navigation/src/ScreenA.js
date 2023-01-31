import React from "react";
import { Button, Text, View } from "react-native";

export default ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>이것은 Screen A 입니다</Text>

      <Button
        title="B로 가기"
        style={{}}
        onPress={() => navigation.navigate("ScreenB", { value: "fromA" })}
      />
      <Button
        title="C로 가기"
        style={{}}
        onPress={
          () => {}
          //   navigation.navigate("NestedNavigator", { value: "ScreenC" })
        }
      />
    </View>
  );
};
