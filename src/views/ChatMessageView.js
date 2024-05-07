import {
  Text,
  View,
  useWindowDimensions,
  Animated,
  Easing,
  Platform,
  Keyboard,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import ChatMessageInput from "../components/ChatMessageInput";
import { useEffect, useRef, useState } from "react";
import { getSpecialisationUsingAi } from "../utils/ai";
import { getDoctorBySpecialization } from "../utils/doctors";
import DoctorListCard from "../components/DoctorListCard";

export default function ChatMessageView({ showChat, setShowChat }) {
  const layout = useWindowDimensions();
  const heightAnim = useRef(new Animated.Value(0)).current;
  const [symptomMessage, setSymptomMessage] = useState("");
  const [specialist, setSpecialist] = useState("");
  const [doctorsList, setDoctorsList] = useState([]);
  const [showSymptom, setShowSymptom] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSend = async () => {
    setIsLoading(true);

    const symptom = symptomMessage;

    setShowSymptom(symptomMessage);
    setSymptomMessage("");

    const specialization = await getSpecialisationUsingAi(symptom);

    setSpecialist(specialization);

    const doctors = await getDoctorBySpecialization(specialization);

    setDoctorsList(doctors);
    console.log(doctors);
    setIsLoading(false);
  };

  useEffect(() => {
    const avoidSafeArea = Platform.OS === "ios" ? 145 : 160;
    const minimumHeight = 50;

    Animated.timing(heightAnim, {
      toValue: showChat ? layout.height - avoidSafeArea : minimumHeight,
      duration: 250,
      useNativeDriver: false,
      easing: Easing.in,
    }).start();

    const showSubscription = Keyboard.addListener("keyboardWillShow", (e) => {
      Animated.timing(heightAnim, {
        toValue: layout.height - avoidSafeArea - e.endCoordinates.height,
        duration: 250,
        useNativeDriver: false,
        easing: Easing.in,
      }).start();
    });
    const hideSubscription = Keyboard.addListener("keyboardWillHide", () => {
      Animated.timing(heightAnim, {
        toValue: showChat ? layout.height - avoidSafeArea : minimumHeight,
        duration: 250,
        useNativeDriver: false,
        easing: Easing.in,
      }).start();
    });

    if (!showChat) {
      setShowSymptom("");
      setSpecialist("");
      setDoctorsList([]);
      setIsLoading(false);
    }

    return () => {
      showSubscription?.remove();
      hideSubscription?.remove();
    };
  }, [showChat]);

  return (
    <Animated.View
      style={{
        height: heightAnim,
      }}
    >
      <ScrollView
        style={{
          borderRadius: 16,
        }}
      >
        {showSymptom === "" ? (
          <Text
            style={{
              fontFamily: "Gilroy-SemiBold",
              fontSize: 64,
              lineHeight: 80,
              color: "#4C4C4C33",
            }}
          >
            How are you feeling today?
          </Text>
        ) : (
          <View>
            <View
              style={{
                padding: 16,
                backgroundColor: "#ffffff",
                borderRadius: 18,
              }}
            >
              <Text
                style={{
                  fontFamily: "Gilroy-SemiBold",
                  color: "#4C4C4C",
                  fontSize: 18,
                  marginBottom: 8,
                }}
              >
                Symtoms
              </Text>
              <Text
                style={{
                  fontFamily: "Gilroy-SemiBold",
                  color: "#4C4C4C",
                  fontSize: 28,
                }}
              >
                {showSymptom}
              </Text>
            </View>
            {!isLoading ? (
              <View>
                <Text
                  style={{
                    fontFamily: "Gilroy-SemiBold",
                    color: "#4C4C4C",
                    fontSize: 18,
                    marginTop: 16,
                  }}
                >
                  You should see a{" "}
                </Text>
                <Text
                  style={{
                    fontFamily: "Gilroy-SemiBold",
                    color: "#4C4C4C",
                    fontSize: 28,
                    marginTop: 8,
                  }}
                >
                  {specialist}
                </Text>
                <View
                  style={{
                    gap: 12,
                    marginTop: 16,
                    paddingBottom: 16,
                  }}
                >
                  {doctorsList.map((doctor) => (
                    <DoctorListCard
                      key={doctor.id}
                      doctor={doctor}
                      symtoms={showSymptom}
                      setShowChat={setShowChat}
                    />
                  ))}
                </View>
              </View>
            ) : (
              <ActivityIndicator
                size="large"
                style={{
                  marginTop: 16,
                }}
              />
            )}
          </View>
        )}
      </ScrollView>
      <ChatMessageInput
        value={symptomMessage}
        setValue={setSymptomMessage}
        showChat={showChat}
        setShowChat={setShowChat}
        onSend={onSend}
      />
    </Animated.View>
  );
}
