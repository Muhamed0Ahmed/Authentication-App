import{CardWrapper } from "@/app/auth/login/CardWrapper";
import { RegisterForm } from "@/components/auth/RegisterForm";


const RegisterPage = () => {
  return (
    <>
      <CardWrapper
        headerLabel="Create an account"
        backButtonLabel="Aleardy have an account? sign here"
        backButtonHref="/auth/login"
        showSocial
      >
        <RegisterForm/>
        
      </CardWrapper>
    </>
  );
};

export default RegisterPage;
