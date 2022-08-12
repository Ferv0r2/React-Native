import React, { useEffect } from "react";
import {
  Text,
  Link,
  HStack,
  Container,
  Heading,
  Switch,
  useColorMode,
  extendTheme,
  VStack,
  Box,
  Button,
  Image,
  Center,
} from "native-base";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { theme } from "./HomeScreen";
const logo = require("../assets/logo.jpg");

const data = [
  {
    title: "Basic",
    price: 25,
  },
  {
    title: "Pro",
    price: 40,
  },
];

const PaymentScreen = ({ navigation }) => {
  return (
    <Container
      flex={1}
      _dark={{ bg: "#252934" }}
      _light={{ bg: "blueGray.50" }}>
      <Image source={logo} alt="logo" size="40" borderRadius={100} />
      <View>
        <Center>
          <Text borderWidth={2} borderColor="#af7dd4" color="#af7dd4">
            Pro
          </Text>
        </Center>
        <View>
          <Text>메타 위즐</Text>
          <Text>30 days Left</Text>
        </View>
        <View>
          <Text>Owner : Orbit#9165</Text>
          <Text>Members : 106</Text>
        </View>
      </View>
      <Button onPress={() => navigation.navigate("Home")}>Home</Button>
    </Container>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#252934",
//     color: "#fff",
//   },
//   content: {
//     flex: 1,
//     margin: 8,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 600,
//   },
//   license: {
//     borderWidth: 1,
//     borderColor: "#af7dd4",
//   },
// });

export default PaymentScreen;
