import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "expo-router";
import ROUTES from "@/app/constants/routes/routes";

const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters"),
  rememberMe: z.boolean().default(false),
});

type LoginFormData = {
  email: string;
  password: string;
  rememberMe: boolean;
};

// Custom hook for the login form
export const useLoginView = () => {
  const router = useRouter();
  const defaultValues: LoginFormData = {
    email: "",
    password: "",
    rememberMe: false,
  };

  const { control, handleSubmit } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues,
  });

  const handleRedirect = () => router.push(ROUTES.SIGN_UP);

  return { control, handleSubmit, handleRedirect };
};
