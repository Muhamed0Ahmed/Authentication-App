import { CardWrapper } from "./CardWrapper";
import { LoginForm } from "@/components/auth/FormLogin";


const LoginPage = () => {
  return (
    <>
      <CardWrapper
        headerLabel="Welcom back"
        backButtonLabel="Don't have an account"
        backButtonHref="/auth/register"
        showSocial

      >
        <LoginForm/>
      </CardWrapper>
    </>
  );
};

export default LoginPage;
