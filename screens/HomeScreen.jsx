import React, { useEffect } from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  extendTheme,
  VStack,
  Box,
  Button,
  Image,
} from "native-base";
const logo = require("../assets/logo.jpg");

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

const HomeScreen = ({ navigation }) => {
  return (
    <Center
      _dark={{ bg: "#252934" }}
      _light={{ bg: "blueGray.50" }}
      px={4}
      flex={1}>
      <VStack space={5} alignItems="center">
        <Image source={logo} alt="logo" size="180" borderRadius={100} />
        <Heading size="lg">Welcome to METAONEER</Heading>
        <HStack space={2} alignItems="center">
          <Text>Hi, there</Text>
          <Box
            _web={{
              _text: {
                fontFamily: "monospace",
                fontSize: "sm",
              },
            }}
            px={2}
            py={1}
            _dark={{ bg: "blueGray.800" }}
            _light={{ bg: "blueGray.200" }}>
            NEWBIE
          </Box>
          <Text>Front-Dev ^__^</Text>
        </HStack>
        <ToggleDarkMode />
      </VStack>
      <Button mt={4} onPress={() => navigation.navigate("Payment")}>
        Payment
      </Button>
    </Center>
  );
};

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}

export default HomeScreen;
