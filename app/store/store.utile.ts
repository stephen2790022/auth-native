import { Platform } from "react-native";

export const getPlatform = () => {
  if (Platform.OS === "android" || Platform.OS === "ios") {
    return "http://10.0.2.2:3000/";
  } else if (Platform.OS === "web") {
    return "http://localhost:3000/";
  } else {
    return "Unknown Platform";
  }
};
