import { Button, Text } from "react-native-paper";
import { View } from "react-native";
import { useAuth } from "./hooks/useAuth";

const LoggedIn = () => {
  const { handleLogOut, token } = useAuth();
  console.log(token);
  return (
    <View>
      <Text>LoggedIn</Text>
      <Button onPress={handleLogOut}>Log out</Button>
    </View>
  );
};

export default LoggedIn;
