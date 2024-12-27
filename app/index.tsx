import { useEffect } from "react";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ROUTES from "./constants/routes/routes";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        if (!token) {
          router.push(ROUTES.LOG_IN);
        } else {
          router.push(ROUTES.LOGGED_IN);
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
        router.push(ROUTES.LOG_IN);
      }
    };

    checkAuth();
  }, [router]);

  return null;
}
