import { Feather } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

export default function CreateAppointmentButton(props) {
  const openCreateAppointmentView = () => {
    props.navigation.navigate("CreateAppointment", props);
  };
  return (
    <TouchableOpacity
      style={{
        color: "#FFFFFF",
        backgroundColor: "#4C4C4C",
        height: 64,
        width: 64,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 22,
        position: "absolute",
        left: "50%",
        bottom: 250,
        transform: [{ translateX: -32 }, { translateY: -32 }],
      }}
      onPress={openCreateAppointmentView}
    >
      <Feather name="plus" size={24} color="#FFFFFF" />
    </TouchableOpacity>
  );
}
