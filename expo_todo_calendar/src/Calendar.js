import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import dayjs from "dayjs";
import { SimpleLineIcons } from "@expo/vector-icons";
import { getDayColor, getDayText, statusBarHeight } from "./utils";

const columnSize = 35;

const Column = ({
  text,
  color,
  opacity,
  disabled,
  onPress,
  isSelected,
  hasTodo,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={{
        width: columnSize,
        height: columnSize,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: isSelected ? "#c2c2c2" : "transparent",
        borderRadius: columnSize / 2,
      }}
    >
      <Text
        style={{
          color,
          opacity,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const ArrowButton = ({ iconName, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        paddingHorizontal: 20,
        paddingVertical: 15,
      }}
    >
      <SimpleLineIcons name={iconName} size={15} color="#404040" />
    </TouchableOpacity>
  );
};

export default ({
  todoList,
  columns,
  selectedDate,
  onPressLeftArrow,
  onPressHeaderDate,
  onPressRightArrow,
  onPressDate,
}) => {
  const ListHeaderComponent = () => {
    const currentDateText = dayjs(selectedDate).format("YYYY.MM.DD.");
    return (
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ArrowButton iconName="arrow-left" onPress={onPressLeftArrow} />
          <TouchableOpacity onPress={onPressHeaderDate}>
            <Text
              style={{
                fontSize: 20,
                color: "#404040",
              }}
            >
              {currentDateText}
            </Text>
          </TouchableOpacity>
          <ArrowButton iconName="arrow-right" onPress={onPressRightArrow} />
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          {[0, 1, 2, 3, 4, 5, 6].map((day) => {
            const dayText = getDayText(day);
            const color = getDayColor(day);
            return (
              <Column
                key={`day-${day}`}
                text={dayText}
                color={color}
                opacity={1}
                disabled={true}
              />
            );
          })}
        </View>
      </View>
    );
  };

  const renderItem = ({ item: date }) => {
    const dateText = dayjs(date).get("date");
    const day = dayjs(date).get("day");
    const color = day === 0 ? "#e67639" : day === 6 ? "#5872d1" : "#2b2b2b";
    const isCurrentMonth = dayjs(date).isSame(selectedDate, "month");
    const onPress = () => onPressDate(date);
    const isSelected = dayjs(date).isSame(selectedDate, "date");
    const hasTodo = todoList.find((todo) =>
      dayjs(todo.date).isSame(dayjs(date))
    );

    return (
      <Column
        text={dateText}
        color={color}
        opacity={isCurrentMonth ? 1 : 0.4}
        onPress={onPress}
        isSelected={isSelected}
      />
    );
  };

  return (
    <FlatList
      data={columns}
      scrollEnabled={false}
      numColumns={7}
      contentContainerStyle={{
        paddingTop: statusBarHeight,
      }}
      renderItem={renderItem}
      ListHeaderComponent={ListHeaderComponent}
    />
  );
};
