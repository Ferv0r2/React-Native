import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import TabA from "./TabA";
import NestedStackNavigator from "./NestedStackNavigator";

const BottomTab = createBottomTabNavigator();

export default () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="TabA"
        component={TabA}
        options={{
          tabBarIcon: () => <Ionicons name="home" size={20} />,
        }}
      />
      <BottomTab.Screen
        name="TabB"
        component={NestedStackNavigator}
        options={{
          tabBarIcon: () => <Ionicons name="settings" size={20} />,
        }}
      />
    </BottomTab.Navigator>
  );
};
