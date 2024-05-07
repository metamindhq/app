import { View, ActivityIndicator, StatusBar } from "react-native";

import { useFonts } from "expo-font";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import NotificationView from "./src/views/NotificationView";
import CreateAppointmentView from "./src/views/CreateAppointmentView";
import Toast from "react-native-toast-message";
import LogInView from "./src/views/AuthView";
import PatientHomeView from "./src/views/PatientHomeView";
import DoctorHomeView from "./src/views/DoctorHomeView";
import PatientDetailsView from "./src/views/PatientDetailsView";

const Stack = createNativeStackNavigator();

function App() {
  let [fontsLoaded] = useFonts({
    "Gilroy-Light": require("./assets/fonts/Gilroy-Light.ttf"),
    "Gilroy-Medium": require("./assets/fonts/Gilroy-Medium.ttf"),
    "Gilroy-Regular": require("./assets/fonts/Gilroy-Regular.ttf"),
    "Gilroy-SemiBold": require("./assets/fonts/Gilroy-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <StatusBar barStyle="default" />
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LogInView}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="PatientHome"
          component={PatientHomeView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DoctorHome"
          component={DoctorHomeView}
          options={{ headerShown: false, headerTitle: "Home" }}
        />
        <Stack.Screen name="Notifications" component={NotificationView} />
        <Stack.Screen
          name="CreateAppointment"
          component={CreateAppointmentView}
          options={{ title: "Create Appointment" }}
        />
        <Stack.Screen
          name="PatientDetails"
          component={PatientDetailsView}
          options={{ headerTitle: "Patient details" }}
        />
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
}

export default App;
