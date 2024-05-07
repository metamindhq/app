import { Text, View } from "react-native";
import Avatar from "./Avatar";
import { Feather } from "@expo/vector-icons";
import ChatMessageView from "../views/ChatMessageView";
import { getCurrentUser } from "../utils/user";
import { useEffect, useState } from "react";

export default function HomeHeader(props) {
  const { navigation } = props;

  const [user, setUser] = useState();

  useEffect(() => {
    getCurrentUser().then((fetchedUser) => {
      console.log("fetchedUser", fetchedUser);
      setUser(fetchedUser);
    });
  }, []);

  return (
    <View style={{ paddingHorizontal: 16 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
          }}
        >
          <Avatar
            uri="https://i.ibb.co/nbBnByY/3d-illustration-person-with-sunglasses-23-2149436188.jpg"
            height={50}
            width={50}
          />
          <View
            style={{
              gap: 4,
            }}
          >
            <Text
              style={{
                color: "#4C4C4C",
                fontSize: 12,
                fontFamily: "Gilroy-SemiBold",
              }}
            >
              Good morning
            </Text>
            <Text
              style={{
                color: "#4C4C4C",
                fontSize: 18,
                fontFamily: "Gilroy-SemiBold",
              }}
            >
              {user?.isDoctor && "Dr"} {user?.name}
            </Text>
          </View>
        </View>
        {/* <Feather
          name="bell"
          size={24}
          color="#4C4C4C"
          onPress={() => navigation.navigate("Notifications")}
        /> */}
        <Feather
          name="log-out"
          size={24}
          color="#4C4C4C"
          onPress={() => navigation.replace("Login")}
        />
      </View>
      {!user?.isDoctor && <ChatMessageView {...props} />}
    </View>
  );
}
