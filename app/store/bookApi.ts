// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getPlatform } from "./store.utile";

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

type Login = {
  email: string;
  password: string;
};
type UserLogIn = {
  user: Login;
};

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: getPlatform(),
    prepareHeaders: async (headers) => {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      headers.set("Content-Type", "application/json");
      headers.set("Accept", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getBooksList: builder.query({
      query: () => "api/books",
    }),
    createBook: builder.mutation({
      query: (newBook) => ({
        url: "api/books",
        method: "POST",
        body: newBook,
      }),
    }),
  }),
});

export const { useGetBooksListQuery } = bookApi;
