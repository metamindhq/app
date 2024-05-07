import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import HomeHeader from "../components/HomeHeader";

export default function DoctorHomeView(props) {
  const showPatientDetails = () => {
    props.navigation.navigate("PatientDetails");
  };

  return (
    <SafeAreaView>
      <HomeHeader {...props} />
      <View
        style={{
          padding: 16,
          height: "100%",
          backgroundColor: "#FFFFFF",
          borderTopStartRadius: 32,
          borderTopEndRadius: 32,
        }}
      >
        <Text
          style={{
            color: "#4C4C4C",
            fontFamily: "Gilroy-SemiBold",
            fontSize: 24,
          }}
        >
          Upcoming appointments
        </Text>
        <ScrollView
          style={{
            marginTop: 16,
          }}
        >
          <View
            style={{
              gap: 16,
            }}
          >
            <TouchableOpacity
              onPress={showPatientDetails}
              style={{
                flexDirection: "row",
                // gap:,
                backgroundColor: "#EEEEEE",
                borderRadius: 12,
              }}
            >
              <Image
                style={{
                  width: 64,
                  height: 64,
                }}
                src="https://i.ibb.co/4jYXS1W/image-removebg-preview-1.png"
              />
              <View
                style={{
                  paddingVertical: 16,
                  gap: 4,
                }}
              >
                <Text
                  style={{
                    fontFamily: "Gilroy-SemiBold",
                    fontSize: 18,
                    color: "#4C4C4C",
                  }}
                >
                  Jaagrav Seal
                </Text>
                <Text
                  style={{
                    fontFamily: "Gilroy-Medium",
                    fontSize: 14,
                    color: "#4C4C4C",
                  }}
                >
                  Scheduled for 21 April 2024 at 01:00PM
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={showPatientDetails}
              style={{
                flexDirection: "row",
                // gap:,
                backgroundColor: "#EEEEEE",
                borderRadius: 12,
              }}
            >
              <Image
                style={{
                  width: 64,
                  height: 64,
                }}
                src="https://i.ibb.co/4jYXS1W/image-removebg-preview-1.png"
              />
              <View
                style={{
                  paddingVertical: 16,
                  gap: 4,
                }}
              >
                <Text
                  style={{
                    fontFamily: "Gilroy-SemiBold",
                    fontSize: 18,
                    color: "#4C4C4C",
                  }}
                >
                  Suman Das
                </Text>
                <Text
                  style={{
                    fontFamily: "Gilroy-Medium",
                    fontSize: 14,
                    color: "#4C4C4C",
                  }}
                >
                  Scheduled for 21 April 2024 at 02:00PM
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={showPatientDetails}
              style={{
                flexDirection: "row",
                // gap:,
                backgroundColor: "#EEEEEE",
                borderRadius: 12,
              }}
            >
              <Image
                style={{
                  width: 64,
                  height: 64,
                }}
                src="https://i.ibb.co/4jYXS1W/image-removebg-preview-1.png"
              />
              <View
                style={{
                  paddingVertical: 16,
                  gap: 4,
                }}
              >
                <Text
                  style={{
                    fontFamily: "Gilroy-SemiBold",
                    fontSize: 18,
                    color: "#4C4C4C",
                  }}
                >
                  Anirban Sengupta
                </Text>
                <Text
                  style={{
                    fontFamily: "Gilroy-Medium",
                    fontSize: 14,
                    color: "#4C4C4C",
                  }}
                >
                  Scheduled for 21 April 2024 at 02:45PM
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={showPatientDetails}
              style={{
                flexDirection: "row",
                // gap:,
                backgroundColor: "#EEEEEE",
                borderRadius: 12,
              }}
            >
              <Image
                style={{
                  width: 64,
                  height: 64,
                }}
                src="https://i.ibb.co/4jYXS1W/image-removebg-preview-1.png"
              />
              <View
                style={{
                  paddingVertical: 16,
                  gap: 4,
                }}
              >
                <Text
                  style={{
                    fontFamily: "Gilroy-SemiBold",
                    fontSize: 18,
                    color: "#4C4C4C",
                  }}
                >
                  Protyasish Majumder
                </Text>
                <Text
                  style={{
                    fontFamily: "Gilroy-Medium",
                    fontSize: 14,
                    color: "#4C4C4C",
                  }}
                >
                  Scheduled for 21 April 2024 at 03:00PM
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={showPatientDetails}
              style={{
                flexDirection: "row",
                // gap:,
                backgroundColor: "#EEEEEE",
                borderRadius: 12,
              }}
            >
              <Image
                style={{
                  width: 64,
                  height: 64,
                }}
                src="https://i.ibb.co/4jYXS1W/image-removebg-preview-1.png"
              />
              <View
                style={{
                  paddingVertical: 16,
                  gap: 4,
                }}
              >
                <Text
                  style={{
                    fontFamily: "Gilroy-SemiBold",
                    fontSize: 18,
                    color: "#4C4C4C",
                  }}
                >
                  Tanish Sen
                </Text>
                <Text
                  style={{
                    fontFamily: "Gilroy-Medium",
                    fontSize: 14,
                    color: "#4C4C4C",
                  }}
                >
                  Scheduled for 21 April 2024 at 05:00PM
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
