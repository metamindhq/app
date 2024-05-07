import { Image, Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function DoctorListCard({ doctor, symtoms, setShowChat }) {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("CreateAppointment", {
      selectedDoctor: doctor,
      symtoms,
      setShowChat,
    });
  };

  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#ffffff",
        borderRadius: 16,
        padding: 8,
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
      }}
      onPress={onPress}
    >
      <View
        style={{
          backgroundColor: "#2AA6FF",
          padding: 4,
          borderRadius: 12,
        }}
      >
        <Image
          style={{
            width: 60,
            height: 60,
          }}
          src="https://i.ibb.co/dr6rZwR/8179550.webp"
        />
      </View>
      <View
        style={{
          flexDirection: "flex",
          gap: 2,
          // marginLeft: 6,
        }}
      >
        <Text
          style={{
            fontFamily: "Gilroy-SemiBold",
            fontSize: 18,
            color: "#4C4C4C",
          }}
        >
          Dr {doctor.name}
        </Text>
        <Text
          style={{
            fontFamily: "Gilroy-Medium",
            fontSize: 12,
            color: "#4C4C4C",
          }}
        >
          {doctor.specialization}
        </Text>
      </View>
      <Feather
        name="chevron-right"
        style={{
          marginLeft: "auto",
        }}
        size={24}
        color="#4C4C4C"
      />
    </TouchableOpacity>
  );
}
