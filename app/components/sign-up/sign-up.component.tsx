import { StyleSheet, Text, View } from "react-native";
import { useSignUpView } from "./sign-up.view";
import SignUpInfosForm from "./sign-up-form/sign-up-infos.component";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { styles } from "./sign-up.styles";
import { Appbar, Button, IconButton, ProgressBar } from "react-native-paper";
import { useRouter } from "expo-router";
import SignUpPasswordForm from "./sign-up-form/sign-up-password";

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  // header: {
  //   display: "flex",
  //   flexDirection: "row", // Arrange items in a row
  //   alignItems: "center", // Vertically center items
  //   justifyContent: "space-between", // Space between button and progress bar
  //   width: "100%",
  //   paddingHorizontal: 16, // Add horizontal padding
  //   height: 60, // Explicit height for the header
  //   backgroundColor: "transparent",
  // },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
  },
  input: {
    marginBottom: 16,
    backgroundColor: "transparent",
  },
  inputOutline: {
    borderRadius: 4,
  },
  button: {
    marginTop: 24,
    paddingVertical: 6,
    borderRadius: 4,
  },
  buttonLabel: {
    fontSize: 16,
    color: "#fff",
  },
  header: {
    backgroundColor: "transparent",
    elevation: 0,
  },
  progressContainer: {
    flex: 1,
    marginRight: 16,
    justifyContent: "center",
  },
  progressBar: {
    height: 2,
    backgroundColor: "#E0E0E0",
  },
});

export default function SignUp() {
  const {
    control,
    progressVal,
    formStep,
    handleSubmit,
    handleBackAction,
    handleContinue,
  } = useSignUpView();
  const router = useRouter();
  console.log("progressVal", progressVal);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Appbar.Header style={style.header}>
          <IconButton
            icon="arrow-left"
            size={25}
            onPress={handleBackAction}
            style={{ backgroundColor: "black" }}
            iconColor="white"
          />
          <View style={style.progressContainer}>
            <ProgressBar
              progress={progressVal} // Adjust this value based on your progress (0-1)
              color="#000"
              style={style.progressBar}
            />
          </View>
        </Appbar.Header>

        <View style={styles.inputContainer}>
          <Text style={style.title}>Sign Up</Text>
          <Text style={style.subtitle}>Fill in your personal informations</Text>
        </View>

        <View style={styles.formWrapper}>
          {formStep === 2 ? (
            <SignUpPasswordForm control={control} />
          ) : (
            <SignUpInfosForm control={control} />
          )}
        </View>
        <View style={styles.buttonContainer}>
          <Button
            mode="outlined"
            onPress={handleContinue}
            style={[styles.signUpButton, styles.buttonCommonStyle]}
            labelStyle={styles.signUpText}
          >
            Continue
          </Button>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
