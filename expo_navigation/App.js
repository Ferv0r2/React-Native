import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenB from "./src/ScreenB";
import BottomTabNavigator from "./src/BottomTabNavigator";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="NestedBottomTab" component={BottomTabNavigator} />
        <Stack.Screen name="ScreenB" component={ScreenB} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="ScreenA" component={ScreenA} />
//         <Stack.Screen name="ScreenB" component={ScreenB} />
//         <Stack.Screen name="NestedNavigator" component={NestedNavigator} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
