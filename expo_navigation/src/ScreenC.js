import React from "react";
import { Button, Text, View } from "react-native";

export default ({ route }) => {
  console.log(route);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>이것은 Screen C 입니다</Text>
      {/* <Text>받은 값 : {route.params.value}</Text> */}
      <Button title="뒤로 가기" style={{}} onPress={() => {}} />
    </View>
  );
};
