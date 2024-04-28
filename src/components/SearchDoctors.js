import { Feather } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import { listDoctors } from "../utils/doctors";

export default function SearchDoctors(props) {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    listDoctors().then((doctors) => {
      setDoctors(doctors);
    });
  }, []);

  return (
    <View>
      <View
        style={{
          backgroundColor: "#ffffff",
          borderRadius: 12,
          padding: 16,
          flexDirection: "row",
          gap: 8,
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <TextInput
          style={{
            fontFamily: "Gilroy-Medium",
            fontSize: 16,
            color: "#4C4C4C",
            marginTop: "auto",
            width: "90%",
          }}
          placeholder="Search doctors"
        />
        <Feather name="search" size={18} color="#4C4C4C" />
      </View>
      <ScrollView>
        {doctors.map((doctor) => (
          <TouchableOpacity
            key={doctor.id}
            style={{
              backgroundColor: "#ffffff",
              borderRadius: 12,
              padding: 8,
              flexDirection: "row",
              gap: 8,
              marginBottom: 16,
              alignItems: "center",
            }}
            onPress={() => props.setSelectedDoctor(doctor)}
          >
            <View
              style={{
                backgroundColor: "#2AA6FF",
                padding: 4,
                borderRadius: 8,
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
        ))}
      </ScrollView>
    </View>
  );
}
