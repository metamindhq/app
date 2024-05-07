import { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import SearchDoctors from "../components/SearchDoctors";
import dayjs from "dayjs";
import { TimeDatePicker, Modes } from "react-native-time-date-picker";
import { getCurrentUser } from "../utils/user";
import { createAppointment } from "../utils/appointments";
import Toast from "react-native-toast-message";

export default function CreateAppointmentView(props) {
  const { selectedDoctor, symtoms, setShowChat } = props.route.params;

  const [isCreateBtnDisabled, setIsCreateBtnDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDateTime, setSelectedDateTime] = useState(
    dayjs().add(1, "day").toDate()
  );

  const onDateTimeChange = useCallback((date) => {
    setSelectedDateTime(date);
  }, []);

  const onSubmit = async () => {
    setIsLoading(true);

    const currentPatient = await getCurrentUser();
    const data = {
      patient_medical_history: "",
      date_time: new Date(selectedDateTime).toISOString(),
      doctor_id: selectedDoctor.id,
      patient_id: currentPatient.id,
      attended: false,
      patient_medical_summary: symtoms,
      id: 0,
    };

    try {
      await createAppointment(data);
      setIsLoading(false);
      setIsCreateBtnDisabled(false);
      props.navigation.setOptions({
        headerRight: () => <ActivityIndicator />,
      });
      props.navigation.goBack();
      setShowChat(false);
    } catch (e) {
      console.log("Error creating appointment", e);
      Toast.show({
        type: "error",
        text1: "Failed to create appointment",
        text2: `Appointment with Dr ${selectedDoctor.name} already exists.`,
        position: "bottom",
      });
    }
  };

  useEffect(() => {
    if (selectedDoctor && selectedDateTime) {
      setIsCreateBtnDisabled(false);
    } else {
      setIsCreateBtnDisabled(true);
    }
  }, [selectedDoctor, selectedDateTime]);

  return (
    <View
      style={{
        padding: 16,
      }}
    >
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text
              style={{
                fontFamily: "Gilroy-SemiBold",
                fontSize: 22,
                color: "#4C4C4C",
              }}
            >
              Dr {selectedDoctor.name}
            </Text>
            <Text
              style={{
                fontFamily: "Gilroy-Medium",
                fontSize: 16,
                color: "#4C4C4C",
                marginTop: 4,
              }}
            >
              {selectedDoctor.specialization}
            </Text>
          </View>
          <Image
            style={{
              width: 90,
              height: 90,
              borderRadius: 20,
            }}
            src="https://i.ibb.co/5WMT0Hx/flat-male-doctor-health-care-dentist-with-text-box-concept-148549-109.jpg"
          />
        </View>
        <View
          style={{
            marginTop: 16,
            backgroundColor: "#FFFFFF",
            borderRadius: 24,
            paddingVertical: 12,
          }}
        >
          <TimeDatePicker
            currentDate={new Date()}
            selectedDate={selectedDateTime}
            mode={Modes.date}
            style={{
              fontFamily: "Gilroy-Medium",
            }}
            options={{
              daysStyle: {
                borderRadius: 16,
                borderWidth: 0.5,
              },
              is24Hour: true,
              mainColor: "#2AA6FF",
              textSecondaryColor: "#4C4C4C",
            }}
            onSelectedChange={onDateTimeChange}
            onTimeChange={onDateTimeChange}
            onMonthYearChange={onDateTimeChange}
            minimumDate={new Date()}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#2AA6FF",
              borderRadius: 12,
              padding: 16,
              alignItems: "center",
              marginTop: 16,
              opacity: isCreateBtnDisabled ? 0.5 : 1,
              width: "100%",
            }}
            disabled={isCreateBtnDisabled}
            onPress={onSubmit}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 16,
                fontFamily: "Gilroy-SemiBold",
              }}
            >
              Schedule Appointment
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
