import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import { View } from "react-native";
import { Header } from "../components/Header/Header";
import { Typography } from "../components/Typography";

export const ImageDetailScreen = () => {
  const navigation = useNavigation();

  const onPressBack = useCallback(() => {
    navigation.goBack();
  }, []);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Header>
        <Header.Group>
          <Header.Icon iconName={"arrow-back"} onPress={onPressBack} />
          <Header.Title title="IMAGE DETAIL" />
        </Header.Group>
      </Header>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography fontSize={20}>IMAGE DETAIL</Typography>
      </View>
    </View>
  );
};
