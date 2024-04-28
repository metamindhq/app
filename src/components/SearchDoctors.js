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
              padding: 16,
              flexDirection: "row",
              gap: 8,
              marginBottom: 16,
              alignItems: "center",
            }}
            onPress={() => props.setSelectedDoctor(doctor)}
          >
            <Image
              style={{
                width: 40,
                height: 40,
                borderRadius: 100,
              }}
              src="https://i.ibb.co/Q8gKjWs/197235722-portrait-of-a-female-doctor-vector-illustration-in-flat-style.jpg"
            />
            <View
              style={{
                flexDirection: "flex",
                gap: 8,
                marginLeft: 6,
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
