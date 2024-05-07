import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Switch,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { setCurrentUser } from "../utils/user";
import Toast from "react-native-toast-message";

export default function LogInView(props) {
  const [isDoctor, setIsDoctor] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async () => {
    setCurrentUser(username, password, isDoctor)
      .then(() => {
        if (isDoctor) props.navigation.replace("DoctorHome");
        else props.navigation.replace("PatientHome");
      })
      .catch((error) => {
        // console.error("Error setting current user", error.message);
        Toast.show({
          type: "error",
          text1: "Login failed!",
          text2: error.toString(),
          position: "bottom",
        });
      });
  };

  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        paddingVertical: 120,
        paddingHorizontal: 24,
        backgroundColor: "#FFFFFF",
      }}
    >
      <Text
        style={{
          fontFamily: "Gilroy-SemiBold",
          fontSize: 34,
          color: "#4C4C4C",
        }}
      >
        Welcome Back!
      </Text>
      <Text
        style={{
          fontFamily: "Gilroy-SemiBold",
          fontSize: 18,
          color: "#4C4C4C",
          marginTop: 8,
        }}
      >
        Please login to continue
      </Text>
      <View
        style={{
          backgroundColor: "#EEEEEE",
          paddingVertical: 16,
          paddingHorizontal: 12,
          borderRadius: 12,
          marginTop: 32,
          flexDirection: "row",
          gap: 8,
        }}
      >
        <Feather name="user" color="#4C4C4C" size={24} />
        <TextInput
          placeholder="Username"
          style={{
            fontSize: 16,
            fontFamily: "Gilroy-Medium",
            width: "90%",
          }}
          value={username}
          onChangeText={setUsername}
          autoCapitalize={false}
        />
      </View>
      <View
        style={{
          backgroundColor: "#EEEEEE",
          paddingVertical: 16,
          paddingHorizontal: 12,
          borderRadius: 12,
          marginTop: 16,
          flexDirection: "row",
          gap: 8,
        }}
      >
        <Feather name="lock" color="#4C4C4C" size={24} />
        <TextInput
          placeholder="Password"
          style={{
            fontSize: 16,
            fontFamily: "Gilroy-Medium",
            width: "90%",
          }}
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 16,
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontFamily: "Gilroy-SemiBold",
            color: "#4C4C4C",
          }}
        >
          Are you a doctor?
        </Text>
        <Switch value={isDoctor} onValueChange={setIsDoctor} />
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#2AA6FF",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 12,
          width: "100%",
          paddingVertical: 18,
          marginTop: 56,
        }}
        onPress={onSubmit}
      >
        <Text
          style={{
            color: "#FFFFFF",
            fontFamily: "Gilroy-Medium",
          }}
        >
          Sign in
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
