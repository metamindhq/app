import { TouchableOpacity } from "@gorhom/bottom-sheet";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";

export default function PatientDetailsView(props) {
  return (
    <SafeAreaView>
      <ScrollView
        style={{
          padding: 16,
        }}
      >
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
                color: "#4C4C4C",
                fontFamily: "Gilroy-SemiBold",
                fontSize: 24,
              }}
            >
              Jaagrav Seal
            </Text>
            <Text
              style={{
                color: "#4C4C4C",
                fontFamily: "Gilroy-Medium",
                fontSize: 16,
                marginTop: 8,
              }}
            >
              21 April 2024 at 01:00PM
            </Text>
          </View>
          <Image
            style={{
              width: 84,
              height: 84,
            }}
            src="https://i.ibb.co/4jYXS1W/image-removebg-preview-1.png"
          />
        </View>
        <View
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: 24,
            marginTop: 16,
            padding: 16,
            gap: 12,
          }}
        >
          <Text
            style={{
              color: "#4C4C4C",
              fontFamily: "Gilroy-Mediums",
              fontSize: 18,
            }}
          >
            Symptoms
          </Text>
          <Text
            style={{
              color: "#4C4C4C",
              fontFamily: "Gilroy-SemiBold",
              fontSize: 24,
            }}
          >
            I recently had a CABG surgery and I am experiencing chest pain and
            shortness of breath. I am also experiencing fatigue and weakness.
          </Text>
          <Text
            style={{
              color: "#4C4C4C",
              fontFamily: "Gilroy-Mediums",
              fontSize: 18,
              marginTop: 12,
            }}
          >
            Current Medication
          </Text>
          <Text
            style={{
              color: "#4C4C4C",
              fontFamily: "Gilroy-SemiBold",
              fontSize: 24,
              lineHeight: 32,
            }}
          >
            • Aspirin 75mg OD {"\n"}• Clopidogrel 75mg OD {"\n"}• Atorvastatin
            40mg OD {"\n"}• Bisoprolol 2.5mg OD
          </Text>
          <Text
            style={{
              color: "#4C4C4C",
              fontFamily: "Gilroy-Mediums",
              fontSize: 18,
              marginTop: 12,
            }}
          >
            AI Recommendations
          </Text>
          <Text
            style={{
              color: "#4C4C4C",
              fontFamily: "Gilroy-SemiBold",
              fontSize: 24,
              lineHeight: 32,
            }}
          >
            • Increase dose of Bisoprolol to 5mg {"\n"}• Start Ramipril 2.5mg
            {"\n"}• Start Spironolactone 25mg {"\n"}• Increase dose of
            Atorvastatin to 80mg
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#2AA6FF",
            borderRadius: 12,
            padding: 16,
            alignItems: "center",
            marginVertical: 16,
            width: "100%",
          }}
        >
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 16,
              fontFamily: "Gilroy-SemiBold",
            }}
          >
            Mark as complete
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
