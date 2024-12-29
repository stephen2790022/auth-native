import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import {
  authApi,
  AuthResponseType,
  UserInfos,
  UserLogIn,
  UserSignUpVal,
} from "../store/authApi";
import { useRouter } from "expo-router";
import ROUTES from "../constants/routes/routes";

export const useAuth = () => {
  const router = useRouter();
  const [logOut, { isLoading: isLoggingOut }] =
    authApi.endpoints.logOut.useMutation();
  const [signUp, { isLoading: isSigningUp }] =
    authApi.endpoints.signUp.useMutation();
  const [logIn, { isLoading: isLoggingIn }] =
    authApi.endpoints.logIn.useMutation();
  const [currentUser, setCurrentUser] = useState<UserInfos | null>(null);
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
      });
  };

  const handleAuth = async (data: AuthResponseType) => {
    const authToken: string | null = data?.token;
    const userInfos: UserInfos | null = data?.user;
    if (authToken) {
      await AsyncStorage.setItem("token", authToken);
      setToken(token);
    }
    if (userInfos) {
      await AsyncStorage.setItem("user", JSON.stringify(userInfos));
      setCurrentUser(userInfos);
    }
    router.push(ROUTES.LOGGED_IN);
  };

  const handleLogIn = async (params: UserLogIn) => {
    logIn(params)
      .unwrap()
      .then(async ({ data }) => handleAuth(data))
      .catch((err) => console.log(err));
  };

  const handleSignUp = async (params: UserSignUpVal) => {
    signUp({ user: params })
      .unwrap()
      .then(async ({ data }) => handleAuth(data))
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
    handleSignUp,
    currentUser,
    isLoggingIn,
    isLoggingOut,
    isSigningUp,
    token,
  };
};
