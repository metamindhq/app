import { getDoctorById } from "../utils/doctors";
import dayjs from "dayjs";
import { Image, Text, View } from "react-native";
import { useEffect, useState } from "react";
import Swipeout from "react-native-swipeout";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import { completeAppointment } from "../utils/appointments";

function AppointmentCompleteBtn(props) {
  const onPress = async () => {
    await completeAppointment(props.id);
    props.refreshAppointments();
  };
  return (
    <View style={{ paddingLeft: 12, backgroundColor: "transparent" }}>
      <TouchableOpacity
        style={{
          width: "100%",
          backgroundColor: "#2AA6FF",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 24,
        }}
        onPress={onPress}
      >
        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 12,
            fontFamily: "Gilroy-SemiBold",
            textAlign: "center",
          }}
        >
          Attended
        </Text>
      </TouchableOpacity>
    </View>
  );
}

function AppointmentCard(props) {
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    getDoctorById(props.doctor_id).then((doctor) => {
      setDoctor(doctor);
    });
  }, []);

  var swipeoutBtns = [
    {
      component: <AppointmentCompleteBtn {...props} />,
      underlayColor: "transparent",
      backgroundColor: "transparent",
    },
  ];

  if (!doctor) return null;

  return (
    <View style={{ width: "100%", marginBottom: 12 }}>
      <Swipeout
        style={{
          backgroundColor: "transparent",
          borderRadius: 24,
        }}
        right={swipeoutBtns}
        buttonWidth={120}
        autoClose={true}
      >
        <View
          style={{
            backgroundColor: "#EEEEEE",
            borderRadius: 24,
            flexDirection: "row",
            padding: 6,
            gap: 6,
          }}
        >
          <Image
            style={{
              width: 90,
              height: 90,
              borderRadius: 20,
            }}
            src="https://i.ibb.co/5WMT0Hx/flat-male-doctor-health-care-dentist-with-text-box-concept-148549-109.jpg"
          />
          <View
            style={{
              paddingVertical: 8,
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
                fontSize: 14,
                color: "#4C4C4C",
                paddingTop: 4,
              }}
            >
              {doctor.specialization}
            </Text>
            <Text
              style={{
                marginTop: "auto",
                fontFamily: "Gilroy-Medium",
                fontSize: 10,
                color: "#4C4C4C",
              }}
            >
              Scheduled for{" "}
              {dayjs(props.date_time + "Z").format("dddd, MMMM D, YYYY")} at{" "}
              {dayjs(props.date_time + "Z").format("h:mm A")}
            </Text>
          </View>
        </View>
      </Swipeout>
    </View>
  );
}

export default AppointmentCard;
