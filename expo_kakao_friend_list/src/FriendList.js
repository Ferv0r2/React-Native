import { ScrollView, View } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import Margin from "./Margin";
import Profile from "./Profile";

export default (props) => {
  if (!props.isOpened) return null;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: getBottomSpace(),
      }}
    >
      {props.data.map((item) => (
        <View key={item.name}>
          <Profile
            uri={item.uri}
            name={item.name}
            introduction={item.introduction}
          />
          <Margin height={13} />
        </View>
      ))}
    </ScrollView>
  );
};
