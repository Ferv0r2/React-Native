import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { RootStackNavigation } from "./src/navigations/RootStackNavigation";

SplashScreen.preventAutoHideAsync();

export default function App() {
  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);
  return (
    <NavigationContainer>
      <RootStackNavigation />
    </NavigationContainer>
  );
}
