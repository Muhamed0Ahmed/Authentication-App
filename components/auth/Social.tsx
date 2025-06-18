"use client";

import { FaGithub, FaGoogle } from "react-icons/fa";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";


export const Social = () => {
 
  return (
    
     <div className="flex justify-center  w-full  gap-x-2 "> 
      <Button size="lg" variant="outline" className="w-20" onClick={() => signIn("google")}>
        <FaGoogle  className="h-5 w-5"/>
      </Button>
      <Button size="lg" variant="outline" className="w-20" onClick={() => signIn("github")}>
        <FaGithub className="h-5 w-5"/>
      </Button>
      
    </div> 

  );
};
