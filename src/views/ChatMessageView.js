import {
  Text,
  View,
  useWindowDimensions,
  Animated,
  Easing,
  Platform,
} from "react-native";
import ChatMessageInput from "../components/ChatMessageInput";
import { useEffect, useRef } from "react";

export default function ChatMessageView({ showChat, setShowChat }) {
  const layout = useWindowDimensions();
  const heightAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const avoidSafeArea = Platform.OS === "ios" ? 200 : 160;
    Animated.timing(heightAnim, {
      toValue: showChat ? layout.height - avoidSafeArea : 0,
      duration: 250,
      useNativeDriver: false,
      easing: Easing.in,
    }).start();
  }, [showChat]);

  return (
    <View>
      <Animated.View
        style={{
          height: heightAnim,
        }}
      >
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
      </Animated.View>
      <ChatMessageInput showChat={showChat} setShowChat={setShowChat} />
    </View>
  );
}
