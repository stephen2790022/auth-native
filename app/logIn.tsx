import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import {
  TextInput,
  Button,
  Checkbox,
  Text,
  HelperText,
} from "react-native-paper";
import * as z from "zod";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginContainer } from "./container/login/login.container";

export const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters"),
  rememberMe: z.boolean().default(false),
});

export type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginScreen() {
  const { control, handleSubmit } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = (data: LoginFormData) => {
    console.log("Form submitted:", data);
    // Handle login logic here
  };

  // const saveAuthData = async (token: string, user: User) => {
  //   await AsyncStorage.setItem("token", token);
  //   await AsyncStorage.setItem("user", JSON.stringify(user));
  //   setToken(token);
  //   setUser(user);
  // };

  // const clearAuthData = async () => {
  //   await AsyncStorage.removeItem("token");
  //   await AsyncStorage.removeItem("user");
  //   setToken(null);
  //   setUser(null);
  // };

  // const userParams = {
  //   email: "testLogIn@example.com",
  //   password: "password123",
  //   password_confirmation: "password123",
  //   first_name: "John",
  //   last_name: "Doe",
  //   user_name: "test",
  //   date_of_birth: "1990-01-01",
  //   gender: "Male",
  //   nationality: "American",
  //   phone_number: "+123456789",
  // };

  return <LoginContainer />;
}
