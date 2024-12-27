import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getPlatform } from "./store.utile";

export type LoginValue = {
  email: string;
  password: string;
};

export type UserLogIn = {
  user: LoginValue;
};

type UserVal = {
  email: string;
  password: string;
  password_confirmation: string;
  first_name: string;
  last_name: string;
  user_name: string;
  date_of_birth: string;
  gender: string;
  nationality: string;
  phone_number: string;
};

type UserSignUp = {
  user: UserVal;
};

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: getPlatform(),
    prepareHeaders: async (headers) => {
      headers.set("Content-Type", "application/json");
      headers.set("Accept", "application/json");
      const token = await AsyncStorage.getItem("token");

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    logIn: builder.mutation<any, UserLogIn>({
      query: (params) => ({
        url: "login",
        method: "POST",
        body: params,
      }),
    }),
    signUp: builder.mutation<any, UserSignUp>({
      query: (params) => ({
        url: "signup",
        method: "POST",
        body: params,
      }),
    }),
    logOut: builder.mutation({
      query: () => ({
        url: "logout",
        method: "DELETE",
      }),
    }),
  }),
});

export const { useLogInMutation, useSignUpMutation } = authApi;
