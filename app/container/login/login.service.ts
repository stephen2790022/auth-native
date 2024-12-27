import { useAuth } from "@/app/hooks/useAuth";
import { LoginValue } from "@/app/store/authApi";

export const useLoginService = () => {
  const { handleLogIn } = useAuth();

  const logInAction = (params: LoginValue) => {
    const data = {
      email: params.email,
      password: params.password,
    };
    handleLogIn({ user: data });
  };

  return { logInAction };
};
