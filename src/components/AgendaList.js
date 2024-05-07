import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function AgendaList(props) {
  const [agenda, setAgenda] = useState([]);

  useEffect(() => {
    const sortedArray = props.list.sort(
      (a, b) =>
        new Date(a?.[props.timeProp]).getTime() -
        new Date(b?.[props.timeProp]).getTime()
    );

    const groups = {};
    for (const item of sortedArray) {
      const time = item?.[props.timeProp];
      const hour = new Date(time).getHours();

      let formattedDate;
      const xDate = dayjs(time).format("DD MMMM, YYYY");
      const today = dayjs().format("DD MMMM, YYYY");
      const tomorrow = dayjs().add(1, "day").format("DD MMMM, YYYY");
      const yesterday = dayjs().subtract(1, "day").format("DD MMMM, YYYY");

      if (xDate === today) {
        formattedDate = "Today";
      } else if (xDate === tomorrow) {
        formattedDate = "Tomorrow";
      } else if (xDate === yesterday) {
        formattedDate = "Yesterday";
      } else {
        formattedDate = dayjs(time).format("DD MMMM, YYYY");
      }

      if (!groups?.[formattedDate]) groups[formattedDate] = {};

      if (!groups?.[formattedDate]?.[hour]) groups[formattedDate][hour] = [];

      groups[formattedDate][hour].push(item);
    }

    setAgenda(groups);
  }, [props.list]);

  return (
    <View>
      {Object.keys(agenda).map((date, index) => (
        <View
          style={{
            marginBottom: 24,
          }}
          key={`date-${index}`}
        >
          <Text
            style={{
              fontFamily: "Gilroy-SemiBold",
              fontSize: 24,
              color: "#4C4C4C",
            }}
          >
            {date}
          </Text>
          {Object.keys(agenda[date]).map((hour, index) => (
            <View key={`hour-${hour}`}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 8,
                  overflow: "hidden",
                  paddingVertical: 14,
                }}
              >
                <Text
                  style={{
                    fontFamily: "Gilroy-SemiBold",
                    fontSize: 14,
                    color: "#4C4C4C",
                  }}
                >
                  {hour < 10 && "0"}
                  {hour}:00
                </Text>
                <Text
                  style={{
                    fontFamily: "Gilroy-SemiBold",
                    fontSize: 14,
                    color: "#4C4C4C",
                  }}
                >
                  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                  -
                </Text>
              </View>
              <View
                style={{
                  gap: 12,
                }}
              >
                {agenda[date][hour].map((agendaProps, index) => (
                  <View key={agendaProps.id}>
                    {React.Children.map(props.children, (child) => {
                      return React.cloneElement(child, { ...agendaProps });
                    })}
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>
      ))}
      <View style={{ height: 380 }}></View>
    </View>
  );
}
