import { Image, RefreshControl, ScrollView, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { getMyAppointments } from "../utils/appointments";
import CreateAppointmentButton from "./CreateAppointmentButton";
import AppointmentCard from "./AppointmentCard";

export default function AppointmentSchedule(props) {
  const [refreshing, setRefreshing] = useState(false);
  const [appointments, setAppointments] = useState([]);

  const reloadData = () => {
    getMyAppointments().then((appointments) => {
      const filteredAppointments = appointments.filter((e) => !e.attended);
      setAppointments([...filteredAppointments]);
      setTimeout(() => {
        setRefreshing(false);
      }, 1000);
    });
  };

  const refresh = () => {
    setRefreshing(true);
    reloadData();
  };

  useEffect(() => {
    reloadData();
  }, []);

  return (
    <View style={{ position: "relative", flex: 1 }}>
      <ScrollView
        style={{
          paddingHorizontal: 16,
          paddingVertical: 24,
          flex: 1,
        }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={refresh} />
        }
      >
        {appointments.map((appointment, index) => (
          <AppointmentCard
            key={`appointment-card-${appointment.id}`}
            {...appointment}
            refreshAppointments={reloadData}
          />
        ))}
        {appointments.length === 0 && !refreshing && (
          <View>
            <Text
              style={{
                fontFamily: "Gilroy-SemiBold",
                fontSize: 52,
                lineHeight: 80,
                color: "#4C4C4C33",
              }}
            >
              Your appointments appear here, book now!
            </Text>
          </View>
        )}
      </ScrollView>
      <CreateAppointmentButton {...props} refreshAppointments={reloadData} />
    </View>
  );
}
