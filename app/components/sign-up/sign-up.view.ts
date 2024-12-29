import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "expo-router";
import { z } from "zod";
import { useState } from "react";

const signUpSchema = z
  .object({
    email: z
      .string()
      .min(1, "Email is required")
      .email("Invalid email address"),
    first_name: z
      .string()
      .max(50, "First name must not exceed 50 characters")
      .optional(),
    last_name: z
      .string()
      .max(50, "Last name must not exceed 50 characters")
      .optional(),
    user_name: z
      .string()
      .min(3, "Username must be at least 3 characters long")
      .max(20, "Username must not exceed 20 characters"),
    date_of_birth: z
      .string()
      .optional()
      .refine(
        (value) => !value || /^\d{4}-\d{2}-\d{2}$/.test(value),
        "Date of birth must be in the format YYYY-MM-DD"
      ),
    gender: z.string().optional(),
    nationality: z.string().optional(),
    phone_number: z
      .string()
      .min(1, "Phone number is required")
      .refine(
        (value) => /^\+?[0-9]{7,15}$/.test(value),
        "Invalid phone number format"
      ),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .max(64, "Password must not exceed 128 characters"),
    confirm_password: z
      .string()
      .min(8, "Confirm Password must be at least 8 characters long")
      .max(64, "Confirm Password must not exceed 128 characters"),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  });

export type SignUpFormData = {
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

export const useSignUpView = () => {
  const [progressVal, setProgressVal] = useState<number>(0.5);
  const [formStep, setFormStep] = useState<1 | 2>(1);
  const router = useRouter();

  const defaultValues: SignUpFormData = {
    email: "",
    password: "",
    password_confirmation: "",
    first_name: "",
    last_name: "",
    user_name: "",
    date_of_birth: "",
    gender: "",
    nationality: "",
    phone_number: "",
  };

  const { control, handleSubmit } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues,
  });

  const handleBackAction = () => {
    if (formStep === 1) {
      router.back();
    }
    setFormStep((prevState) => (prevState === 2 ? 1 : 2));
    setProgressVal((prevState) => (prevState === 1 ? 0.5 : 1));
  };

  const handleContinue = () => {
    setProgressVal(1);
    setFormStep(2);
  };

  return {
    control,
    progressVal,
    formStep,
    handleSubmit,
    handleBackAction,
    handleContinue,
  };
};
