import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Provider as PaperProvider } from "react-native-paper";
import { commonTheme } from "./theme.style";
import { enGB, registerTranslation } from "react-native-paper-dates";

export default function RootLayout() {
  registerTranslation("en-GB", enGB);
  return (
    <Provider store={store}>
      <Stack
        screenOptions={{
          headerShown: false, // Désactiver le header par défaut pour toutes les routes
        }}
      />
    </Provider>
  );
}
