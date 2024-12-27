import { LogIn } from "@/app/components/login/login.component";
import { useLoginService } from "./login.service";

export const LoginContainer = () => {
  const { logInAction } = useLoginService();
  return <LogIn logInAction={logInAction} />;
};
