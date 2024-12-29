import { useAuth } from "@/app/hooks/useAuth";

export const signUpService = () => {
  const { handleSignUp, isSigningUp } = useAuth();

  return { handleSignUp, isSigningUp };
};
