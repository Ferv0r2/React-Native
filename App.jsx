import React from "react";
import { StatusBar } from "expo-status-bar";
import { Button, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";

const App = () => {
  return (
    <TailwindProvider>
      <View className="flex-1 items-center justify-center bg-white">
        <Text>Hello World!</Text>
        <Button
          style={styles.button}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <StatusBar style="auto" />
      </View>
    </TailwindProvider>
  );
};

export default App;
