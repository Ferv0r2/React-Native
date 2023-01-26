import { View, Text } from "react-native";
import BookmarkButton from "./button/BookmarkButton";
import AlarmButton from "./button/AlarmButton";
import NextBusInfo from "./NextBusInfo";
import { COLOR } from "./utils/color";

export default ({
  isBookmarked,
  onPressBookmark,
  num,
  directionDescription,
  numColor,
  processedNextBusInfo,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 75,
        backgroundColor: COLOR.WHITE,
      }}
    >
      <View
        style={{
          flex: 0.8,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <BookmarkButton
          size={20}
          isBookmarked={isBookmarked}
          onPress={onPressBookmark}
          style={{
            paddingHorizontal: 10,
          }}
        />
        <View style={{ flex: 1 }}>
          <Text style={{ color: numColor, fontSize: 20 }}>{num}</Text>
          <Text style={{ fontSize: 13, color: COLOR.GRAY_3, marginRight: 5 }}>
            {directionDescription} 방향
          </Text>
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
        <View
          style={{
            flex: 1,
          }}
        >
          {processedNextBusInfo.map((info, idx) => (
            <NextBusInfo
              key={idx}
              hasInfo={info.hasInfo}
              remainedTimeText={info.remainedTimeText}
              numOfRemainedStops={info.numOfRemainedStops}
              seatStatusText={info.seatStatusText}
            />
          ))}
          {/* <NextBusInfo
            hasInfo={true}
            remainedTimeText={"8분 1초"}
            numOfRemainedStops={5}
            seatStatusText={"여유"}
          />
          <NextBusInfo hasInfo={false} remainedTimeText={"도착 정보 없음"} /> */}
        </View>
        <AlarmButton
          onPress={() => {}}
          style={{
            padding: 10,
          }}
        />
      </View>
    </View>
  );
};
