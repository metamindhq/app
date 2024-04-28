import { Text, View, TextInput, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "@gorhom/bottom-sheet";

export default function ChatMessageInput({ showChat, setShowChat }) {
  return (
    <Pressable
      style={{
        flexDirection: "row",
        gap: 12,
        alignItems: "center",
        padding: 14,
        backgroundColor: "#ffffff",
        borderWidth: 1,
        borderColor: "#2d2d2d33",
        borderRadius: 16,
      }}
      onPress={() => setShowChat(true)}
    >
      {showChat ? (
        <TouchableOpacity onPress={() => setShowChat(false)}>
          <Feather name="x" size={24} color="#4C4C4C" />
        </TouchableOpacity>
      ) : (
        <Feather name="message-square" size={24} color="#4C4C4C" />
      )}
      {showChat ? (
        <TextInput
          style={{
            fontFamily: "Gilroy-Medium",
            fontSize: 16,
            flexGrow: 1,
          }}
          placeholder="Type a message"
        />
      ) : (
        <Text
          style={{
            fontFamily: "Gilroy-Medium",
            fontSize: 16,
            flexGrow: 1,
            opacity: 0.5,
          }}
        >
          How are you feeling today?
        </Text>
      )}
      <Feather name="mic" size={24} color="#4C4C4C" />
    </Pressable>
  );
}
