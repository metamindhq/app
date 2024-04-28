import { Button, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function MedicineReminderCard(props) {
  return (
    <View
      style={{
        backgroundColor: "#EEEEEE",
        borderRadius: 12,
        padding: 4,
        flexDirection: "row",
        gap: 8,
      }}
    >
      <View
        style={{
          backgroundColor: "#4C4C4C",
          paddingHorizontal: 24,
          alignItems: "center",
          flexDirection: "row",
          borderRadius: 10,
        }}
      >
        <MaterialCommunityIcons name={props.icon} size={24} color="#ffffff" />
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
          {props.dosage} • {props.prandial} • {props.quantity}
        </Text>

        <Text
          style={{
            color: "#4C4C4C",
            fontSize: 12,
            fontFamily: "Gilroy-Medium",
            marginTop: "auto",
          }}
        >
          at {props.reminder.hour.toString().length === 1 && "0"}
          {props.reminder.hour < 12
            ? props.reminder.hour
            : props.reminder.hour - 12}
          :{props.reminder.minute.toString() / 10 == 0 && "0"}
          {props.reminder.minute}
        </Text>
      </View>
      <View
        style={{
          alignItems: "center",
          marginLeft: "auto",
          padding: 4,
        }}
      >
        <View
          style={{
            backgroundColor: "#2AA6FF",
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 8,
          }}
        >
          <Text style={{ color: "#FFFFFF", fontSize: 12 }}>Taken</Text>
        </View>
        <View
          style={{
            paddingHorizontal: 12,
            paddingVertical: 8,
            borderRadius: 8,
          }}
        >
          <Text style={{ color: "#4C4C4C", fontSize: 12 }}>Skip</Text>
        </View>
      </View>
    </View>
  );
}
