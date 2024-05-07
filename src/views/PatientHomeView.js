import {
  Animated,
  Easing,
  Platform,
  SafeAreaView,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

import HomeHeader from "../components/HomeHeader";
import { TabBar, TabView, SceneMap } from "react-native-tab-view";
import MedicationSchedule from "../components/MedicationSchedule";
import AppointmentSchedule from "../components/AppointmentSchedule";
import { useEffect, useRef, useState } from "react";

function renderText({ route, focused }) {
  return (
    <Text
      style={{
        color: focused ? "#4C4C4C" : "#4C4C4C33",
        fontFamily: "Gilroy-SemiBold",
        fontSize: 16,
        textTransform: "none",
      }}
    >
      {route.title}
    </Text>
  );
}

function renderTabBar(props) {
  return (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: "#4C4C4C" }}
      style={{ backgroundColor: "transparent" }}
      renderLabel={renderText}
      android_ripple={false}
    />
  );
}

export default function PatientHomeView(props) {
  const opacityAnim = useRef(new Animated.Value(0)).current;
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "medicationSchedule", title: "My Medicines" },
    { key: "appointmentSchedule", title: "Appointments" },
  ]);
  const [showChat, setShowChat] = useState(false);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case "medicationSchedule":
        return <MedicationSchedule {...props} />;

      case "appointmentSchedule":
        return <AppointmentSchedule {...props} setShowChat={setShowChat} />;

      default:
        return null;
    }
  };

  useEffect(() => {
    Animated.timing(opacityAnim, {
      toValue: showChat ? 0 : 1,
      duration: 250,
      useNativeDriver: false,
      easing: Easing.in,
    }).start();
  }, [showChat]);

  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "ios" ? 64 : 16,
        backgroundColor: "#EEEEEE",
      }}
    >
      <HomeHeader {...props} showChat={showChat} setShowChat={setShowChat} />
      {!showChat && (
        <Animated.View
          style={{
            height: "100%",
            width: "100%",
            borderTopLeftRadius: 32,
            borderTopRightRadius: 32,
            backgroundColor: "#ffffff",
            marginTop: 18,
            shadowRadius: 16,
            shadowColor: "#000000",
            shadowOpacity: 0.05,
            opacity: opacityAnim,
          }}
        >
          <TabView
            lazy
            navigationState={{ index, routes }}
            renderScene={renderScene}
            renderTabBar={renderTabBar}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
          />
        </Animated.View>
      )}
    </SafeAreaView>
  );
}
