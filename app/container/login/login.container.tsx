import LogIn from "@/app/components/login/login.component";
import { useLoginService } from "./login.service";

const LoginContainer = () => {
  const { logInAction } = useLoginService();
  return <LogIn logInAction={logInAction} />;
};

export default LoginContainer;
