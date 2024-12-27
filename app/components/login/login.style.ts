import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerBackGround: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    padding: 10,
  },
  backgroundImage: {
    resizeMode: "cover",
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 40,
    marginBottom: 40,
  },
  inputContainer: {
    flex: 4,
    gap: 20,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  inputWrapper: {
    gap: 10,
  },
  input: {
    backgroundColor: "transparent",
  },
  inputTitle: {
    fontSize: 19,
    fontWeight: 700,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },

  buttonContainer: {
    height: 70,
    flex: 1,
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
    borderRadius: 1,
    flex: 1,
  },
  signUpText: {
    color: "#000000",
    fontSize: 16.74,
    fontWeight: 700,
  },
  logInText: {
    color: "#ffff",
    fontSize: 16.74,
    fontWeight: 700,
  },
  loginButton: {
    backgroundColor: "#000000",
    borderRadius: 1,
    flex: 1,
  },
});
