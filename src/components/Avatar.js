import { Image } from "react-native";

export default function Avatar({ uri, height, width }) {
  return (
    <Image source={{ uri: uri, width, height }} style={{ borderRadius: 12 }} />
  );
}
