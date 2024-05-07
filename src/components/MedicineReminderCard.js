import { Button, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import dayjs from "dayjs";

export default function MedicineReminderCard(props) {
  return (
    <View
      style={{
        backgroundColor: "#EEEEEE",
        borderRadius: 24,
        padding: 6,
        flexDirection: "row",
        gap: 8,
      }}
    >
      <View
        style={{
          backgroundColor: "#4C4C4C",
          paddingHorizontal: 28,
          alignItems: "center",
          flexDirection: "row",
          borderRadius: 22,
        }}
      >
        <MaterialCommunityIcons name="pill" size={24} color="#ffffff" />
      </View>
      <View style={{ paddingVertical: 6 }}>
        <Text
          style={{
            fontFamily: "Gilroy-SemiBold",
            fontSize: 18,
            color: "#4C4C4C",
          }}
        >
          {props.medicine}
        </Text>
        <Text
          style={{
            color: "#4C4C4C",
            fontFamily: "Gilroy-Medium",
            fontSize: 12,
            marginTop: 2,
          }}
        >
          {props.quantity}
        </Text>

        <Text
          style={{
            color: "#4C4C4C",
            fontSize: 12,
            fontFamily: "Gilroy-Medium",
            marginTop: "auto",
          }}
        >
          at {dayjs(props.reminder_timestamp).format("h:mmA")}
        </Text>
      </View>
      <View
        style={{
          alignItems: "center",
          marginLeft: "auto",
          padding: 4,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#2AA6FF",
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 14,
          }}
        >
          <Text style={{ color: "#FFFFFF", fontSize: 12 }}>Taken</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingHorizontal: 12,
            paddingVertical: 8,
            borderRadius: 14,
          }}
        >
          <Text style={{ color: "#4C4C4C", fontSize: 12 }}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
