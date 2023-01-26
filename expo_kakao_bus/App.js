import { useEffect, useState } from "react";
import { SectionList, View, Text, RefreshControl } from "react-native";
import dayjs from "dayjs";
import BusInfo from "./src/BusInfo";
import SimpleIcon from "./src/SimpleIcon";
import BookmarkButton from "./src/button/BookmarkButton";
import Margin from "./src/utils/Margin";
import {
  getSections,
  busStop,
  getBusNumColorByType,
  getRemainedTimeText,
  getSeatStatusText,
} from "./src/utils/data";
import { COLOR } from "./src/utils/color";
import { useTheme } from "./src/hooks/useTheme";

export default function App() {
  const sections = getSections(busStop.buses);
  const [now, setNow] = useState(dayjs());
  const [refreshing, setRefreshing] = useState(false);
  const { isDark, NEWCOLOR, toggleIsDark } = useTheme();

  useEffect(() => {
    const timer = setInterval(() => {
      const newNow = dayjs();
      setNow(newNow);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (refreshing) {
      setRefreshing(false);
      setNow(dayjs());
    }
    // setTimeout(() => {
    // }, 3000);
  }, [refreshing]);

  const onPressBusStopBookmark = () => {};

  const onRefresh = () => setRefreshing(true);

  const ListHeaderComponent = () => (
    <View
      style={{
        backgroundColor: COLOR.GRAY_3,
        height: 170,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Margin height={10} />
        <Text
          style={{
            color: NEWCOLOR.WHITE_BLACK,
            fontSize: 13,
          }}
        >
          {busStop.id}
        </Text>
        <Margin height={4} />
        <Text
          style={{
            color: NEWCOLOR.WHITE_BLACK,
            fontSize: 20,
          }}
        >
          {busStop.name}
        </Text>
        <Margin height={4} />
        <Text
          style={{
            color: NEWCOLOR.GRAY_1_GRAY_4,
            fontSize: 14,
          }}
        >
          {busStop.name}
        </Text>
        <Margin height={15} />
        <BookmarkButton
          size={22}
          isBookmarked={true}
          onPress={onPressBusStopBookmark}
          style={{
            borderWidth: 0.3,
            borderColor: NEWCOLOR.GRAY_1_GRAY_4,
            borderRadius: 32 / 2,
            padding: 6,
          }}
        />
        <Margin height={25} />
      </View>
    </View>
  );

  const ListFooterComponent = () => <Margin height={30} />;

  const ItemSeparatorComponent = () => (
    <View
      style={{
        width: "100%",
        height: 1,
        backgroundColor: NEWCOLOR.GRAY_1_GRAY_4,
      }}
    />
  );

  const renderSectionHeader = ({ section: { title } }) => (
    <View
      style={{
        paddingLeft: 13,
        paddingVertical: 3,
        backgroundColor: NEWCOLOR.GRAY_1_GRAY_4,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: NEWCOLOR.GRAY_2_GRAY_3,
        borderBottomColor: NEWCOLOR.GRAY_2_GRAY_3,
      }}
    >
      <Text
        style={{
          fontSize: 12,
          color: COLOR.GRAY_4,
        }}
      >
        {title}
      </Text>
    </View>
  );

  const renderItem = ({ item: bus }) => {
    const numColor = getBusNumColorByType(bus.type);
    const firstNextBusInfo = bus.nextBusInfos?.[0] ?? null;
    const sencondNextBusInfo = bus.nextBusInfos?.[1] ?? null;
    const newNextBusInfo =
      !firstNextBusInfo && !sencondNextBusInfo
        ? [null]
        : [firstNextBusInfo, sencondNextBusInfo];
    const processedNextBusInfo = newNextBusInfo.map((info) => {
      if (!info)
        return {
          hasInfo: false,
          remainedTimeText: "도착 정보 없음",
        };

      const { arrivalTime, numOfRemainedStops, numOfPassengers } = info;
      const remainedTimeText = getRemainedTimeText(now, arrivalTime);
      const seatStatusText = getSeatStatusText(bus.type, numOfPassengers);
      return {
        hasInfo: true,
        remainedTimeText,
        numOfRemainedStops,
        seatStatusText,
      };
    });
    return (
      <BusInfo
        isBookmarked={bus.isBookmarked}
        onPressBookmark={() => {}}
        num={bus.num}
        directionDescription={bus.directionDescription}
        numColor={numColor}
        processedNextBusInfo={processedNextBusInfo}
      />
    );
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View style={{ backgroundColor: NEWCOLOR.GRAY_3_GRAY_2, width: "100%" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <SimpleIcon name="arrow-left" />
          <SimpleIcon name="home" />
        </View>
        <View
          style={{
            position: "absolute",
            width: "100%",
            height: 500,
            backgroundColor: NEWCOLOR.GRAY_3_GRAY_2,
            zIndex: -1,
          }}
        />
      </View>

      <SectionList
        style={{
          flex: 1,
          width: "100%",
        }}
        sections={sections}
        renderSectionHeader={renderSectionHeader}
        renderItem={renderItem}
        ListHeaderComponent={ListHeaderComponent}
        ListFooterComponent={ListFooterComponent}
        ItemSeparatorComponent={ItemSeparatorComponent}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
}
