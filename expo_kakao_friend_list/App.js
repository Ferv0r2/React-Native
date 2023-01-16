import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { friendProfiles, myProfile } from "./src/data";
import Header from "./src/Header";
import Division from "./src/Division";
import Margin from "./src/Margin";
import Profile from "./src/Profile";
import FriendList from "./src/FriendList";
import FriendSection from "./src/FriendSection";
import Tapbar from "./src/Tapbar";

export default function App() {
  const [isOpened, setIsOpened] = useState(true);
  const [selectedTabIdx, setSelectedTabIdx] = useState(0);

  const onPressArrow = () => {
    setIsOpened(!isOpened);
  };

  const ItemSeparatorComponent = () => <Margin height={13} />;

  const renderItem = ({ item }) => (
    <View>
      <Profile
        uri={item.uri}
        name={item.name}
        introduction={item.introduction}
        isMe={false}
      />
    </View>
  );

  const ListHeaderComponent = () => (
    <View
      style={{
        backgroundColor: "white",
      }}
    >
      <Header />
      <Margin height={10} />
      <Profile
        uri={myProfile.uri}
        name={myProfile.name}
        introduction={myProfile.introduction}
        isMe={true}
      />
      <Margin height={15} />
      <Division />
      <Margin height={12} />
      <FriendSection
        friendProfileLen={friendProfiles.length}
        onPressArrow={onPressArrow}
        isOpened={isOpened}
      />
      <Margin height={5} />
    </View>
  );

  const ListFooterComponent = () => <Margin height={10} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={isOpened ? friendProfiles : []}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        keyExtractor={(item) => item.uri}
        stickyHeaderIndices={[0]}
        ItemSeparatorComponent={ItemSeparatorComponent}
        renderItem={renderItem}
        ListHeaderComponent={ListHeaderComponent}
        ListFooterComponent={ListFooterComponent}
        showsVerticalScrollIndicator={false}
      />
      <Tapbar
        selectedTabIdx={selectedTabIdx}
        setSelectedTabIdx={setSelectedTabIdx}
      />
    </View>
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView
        edges={["right", "bottom", "left"]}
        style={styles.container}
      >
        <View
          style={{
            flex: 1,
            paddingHorizontal: 15,
          }}
        >
          <Header />
          <Margin height={10} />
          <Profile
            uri={myProfile.uri}
            name={myProfile.name}
            introduction={myProfile.introduction}
          />
          <Margin height={15} />
          <Division />
          <Margin height={12} />
          <FriendSection
            friendProfileLen={friendProfiles.length}
            onPressArrow={onPressArrow}
            isOpened={isOpened}
          />
          <FriendList data={friendProfiles} isOpened={isOpened} />
        </View>
        <Tapbar
          selectedTabIdx={selectedTabIdx}
          setSelectedTabIdx={setSelectedTabIdx}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: getStatusBarHeight(true),
  },
});
