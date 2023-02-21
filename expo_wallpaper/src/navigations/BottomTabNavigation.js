import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FavoriteImageListScreen } from "../screens/FavoriteImageListScreen";
import { ImageListScreen } from "../screens/ImageListScreen";
import { TabIcon } from "../components/TabIcon";

const Tabs = createBottomTabNavigator();
export const BottomTabNavigation = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color }) => {
          const getIconName = () => {
            if (route.name === "ImageList") return "home";
            if (route.name === "FavoriteImageList") return "star";
          };

          const iconName = getIconName();
          return <TabIcon iconName={iconName} iconColor={color} />;
        },
      })}
    >
      <Tabs.Screen name="ImageList" component={ImageListScreen} />
      <Tabs.Screen
        name="FavoriteImageList"
        component={FavoriteImageListScreen}
      />
    </Tabs.Navigator>
  );
};
