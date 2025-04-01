"use client";

import { useRouter } from "next/navigation";

interface ILoginButtonProps {
  children: React.ReactNode;
  mode?: "model" | "redirect";
  asChild?: boolean;
}

export const LoginButton = ({
  children,
  mode='redirect',
  
}: ILoginButtonProps) => {
    const router = useRouter()
  const onclick = () => {
    router.push('/auth/login')
}

  if(mode == "model") {
    return <span>
        TODO : Implement Model
    </span>
  }
  return <span onClick={onclick} className="cursor-pointer">{children}</span>;
};
