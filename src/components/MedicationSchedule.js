import { ScrollView, Text, View } from "react-native";
import MedicineReminderCard from "./MedicineReminderCard";

export default function MedicationSchedule() {
  const schedule = [
    {
      reminder: {
        hour: 13,
        minute: 0,
      },
      medicine: "Ecospirin",
      dosage: "1 pill",
      quantity: "75mg",
      prandial: "After lunch",
      icon: "pill",
    },
    {
      reminder: {
        hour: 8,
        minute: 30,
      },
      medicine: "Atorvastatin",
      dosage: "1 pill",
      quantity: "40mg",
      prandial: "After breakfast",
      icon: "pill",
    },
    {
      reminder: {
        hour: 8,
        minute: 0,
      },
      medicine: "Metformin",
      dosage: "1 pill",
      quantity: "500mg",
      prandial: "Before breakfast",
      icon: "pill",
    },
    {
      reminder: {
        hour: 22,
        minute: 30,
      },
      medicine: "Azmarda",
      dosage: "0.5 pill",
      quantity: "125mg",
      prandial: "After dinner",
      icon: "pill",
    },
  ];

  return (
    <ScrollView
      style={{
        paddingHorizontal: 16,
        paddingVertical: 24,
        width: "100%",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          gap: 12,
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <Text
          style={{
            fontFamily: "Gilroy-SemiBold",
            fontSize: 28,
            color: "#4C4C4C",
          }}
        >
          Today
        </Text>
      </View>
      <View>
        {Array.from({ length: 24 }).map((_, index) => (
          <View key={`slot-${index}`}>
            {schedule.find(({ reminder }) => reminder.hour === index + 1) ? (
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 12,
                    overflow: "hidden",
                  }}
                >
                  <Text
                    key={index}
                    style={{
                      paddingVertical: 18,
                      fontFamily: "Gilroy-SemiBold",
                      color: "#4C4C4C",
                    }}
                  >
                    {(index < 12 ? index + 1 : index - 12 + 1).toString()
                      .length === 1 && "0"}
                    {index < 12 ? index + 1 : index - 12 + 1}:00
                    {index < 12 ? "AM" : "PM"}
                  </Text>
                  <Text
                    ellipsizeMode="clip"
                    numberOfLines={1}
                    style={{ color: "#4C4C4C" }}
                  >
                    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                    - - - - - - - -
                  </Text>
                </View>
                <View
                  style={{
                    gap: 8,
                  }}
                >
                  {schedule
                    .filter(({ reminder }) => reminder.hour === index + 1)
                    .map((cardProps, index) => (
                      <MedicineReminderCard
                        key={`medicine-reminder-card-${index}`}
                        {...cardProps}
                      />
                    ))}
                </View>
              </View>
            ) : (
              <></>
            )}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
