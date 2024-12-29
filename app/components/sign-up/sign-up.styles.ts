import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    backgroundColor: "transparent",
  },
  inputTitle: {
    fontSize: 19,
    fontWeight: 700,
  },
  inputWrapper: {
    gap: 0,
  },
  inputContainer: {
    // flex: 1,
    gap: 5,
    justifyContent: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  formWrapper: {
    // flex: 1,
    gap: 20,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  buttonContainer: {
    height: 100,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 12,
  },
  buttonCommonStyle: {
    paddingVertical: 11,
    paddingHorizontal: 22,
  },
  signUpButton: {
    borderColor: "#000000",
    backgroundColor: "#000000",
    borderRadius: 1,
    flex: 1,
  },
  signUpText: {
    color: "#ffff",
    fontSize: 16.74,
    fontWeight: 700,
  },
});
