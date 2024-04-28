import { RefreshControl, ScrollView, Text, View } from "react-native";
import MedicineReminderCard from "./MedicineReminderCard";
import { useEffect, useState } from "react";
import { getLatestPrescription } from "../utils/prescriptions";
import AgendaList from "./AgendaList";

function MedicationSchedule() {
  const [schedule, setSchedule] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const reloadData = () => {
    getLatestPrescription().then((p) => {
      setSchedule(JSON.parse(p.medicines));
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
    <ScrollView
      style={{
        paddingHorizontal: 16,
        paddingVertical: 24,
        width: "100%",
      }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={refresh} />
      }
    >
      <AgendaList list={schedule} timeProp="reminder_timestamp">
        <MedicineReminderCard />
      </AgendaList>
      {schedule.length === 0 && (
        <Text
          style={{
            fontFamily: "Gilroy-SemiBold",
            fontSize: 52,
            lineHeight: 80,
            color: "#4C4C4C33",
          }}
        >
          Your medication schedule appears here.
        </Text>
      )}
    </ScrollView>
  );
}

export default MedicationSchedule;
