import { Text, View, TextInput, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import { useState } from "react";

export default function ChatMessageInput({
  value,
  setValue,
  showChat,
  setShowChat,
  onSend,
}) {
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
        <Feather name="search" size={24} color="#4C4C4C" />
      )}
      {showChat ? (
        <TextInput
          style={{
            fontFamily: "Gilroy-Medium",
            fontSize: 16,
            flexGrow: 1,
            maxWidth: "80%",
            maxHeight: 100,
            bottom: 0,
          }}
          placeholder="Type in your symptoms"
          value={value}
          onChangeText={setValue}
          multiline={true}
          textAlignVertical="bottom"
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
          Find yourself a doctor
        </Text>
      )}
      {showChat && (
        <Feather name="send" size={24} color="#4C4C4C" onPress={onSend} />
      )}
    </Pressable>
  );
}
