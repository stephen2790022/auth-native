import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { authApi, UserLogIn } from "../store/authApi";
import { useRouter } from "expo-router";
import ROUTES from "../constants/routes/routes";

type User = {
  email: string;
  first_name: string;
  last_name: string;
  user_name: string;
  date_of_birth: string;
  gender: string;
  nationality: string;
  phone_number: string;
};

export const useAuth = () => {
  const router = useRouter();
  const [logOut, { isLoading: isLoggingOut }] =
    authApi.endpoints.logOut.useMutation();
  const [logIn, { isLoading: isLoggingIn }] =
    authApi.endpoints.logIn.useMutation();
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const handleLogOut = async () => {
    logOut({})
      .unwrap()
      .then(async (data) => {
        console.log(data);
        console.log("u log out");
        await AsyncStorage.removeItem("token");
        await AsyncStorage.removeItem("user");
        setCurrentUser(null);
        setToken(null);
        router.push(ROUTES.LOG_IN);
      })
      .catch(async (err) => {
        console.log(err);
        // await AsyncStorage.removeItem("token");
        // await AsyncStorage.removeItem("user");
        // setCurrentUser(null);
        // setToken(null);
        // router.push(ROUTES.LOG_IN);
      });
  };

  const handleLogIn = async (params: UserLogIn) => {
    console.log(params);
    logIn(params)
      .unwrap()
      .then(async (data) => {
        const authToken: string | null = data?.token;
        const userInfos: User | null = data?.data?.user;
        if (authToken) {
          await AsyncStorage.setItem("token", authToken);
          setToken(token);
        }
        if (userInfos) {
          await AsyncStorage.setItem("user", JSON.stringify(userInfos));
          setCurrentUser(userInfos);
        }
        router.push(ROUTES.LOGGED_IN);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const loadAuthData = async () => {
      const storedUser = await AsyncStorage.getItem("user");
      const storedToken = await AsyncStorage.getItem("token");

      if (storedUser) setCurrentUser(JSON.parse(storedUser));
      if (storedToken) setToken(storedToken);
    };

    loadAuthData();
  }, []);

  return {
    handleLogOut,
    handleLogIn,
    currentUser,
    isLoggingIn,
    isLoggingOut,
    token,
  };
};
