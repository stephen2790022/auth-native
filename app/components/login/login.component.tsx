import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import {
  TextInput,
  Button,
  Checkbox,
  Text,
  HelperText,
} from "react-native-paper";
import { ImageBackground, View } from "react-native";
import { styles } from "./login.style";
import { useLoginView } from "./login.view";
import { LoginForm } from "./login-form/login-form";
import { LoginValue } from "@/app/store/authApi";

type LogInProps = {
  logInAction: (params: LoginValue) => void;
};

export const LogIn = ({ logInAction }: LogInProps) => {
  const { control, handleSubmit, handleRedirect } = useLoginView();

  return (
    <ImageBackground style={styles.containerBackGround} source={{ uri: "" }}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <Text style={styles.logo}>VOGGR.</Text>
          <View style={styles.inputContainer}>
            <LoginForm control={control} />
          </View>

          <View style={styles.buttonContainer}>
            <Button
              mode="outlined"
              onPress={handleRedirect}
              style={[styles.signUpButton, styles.buttonCommonStyle]}
              labelStyle={styles.signUpText}
            >
              Sign up
            </Button>
            <Button
              mode="contained"
              onPress={handleSubmit(logInAction)}
              style={[styles.loginButton, styles.buttonCommonStyle]}
              labelStyle={styles.logInText}
            >
              Login
            </Button>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
};
