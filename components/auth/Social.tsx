"use client";

import { FaGithub, FaGoogle } from "react-icons/fa";
import { Button } from "../ui/button";

export const Social = () => {
  return (
    
     <div className="flex justify-center  w-full  gap-x-2 "> 
      <Button size="lg" variant="outline" className="w-20" onClick={() => console.log('google login clicked')}>
        <FaGoogle  className="h-5 w-5"/>
      </Button>
      <Button size="lg" variant="outline" className="w-20" onClick={() => console.log('github login clicked')}>
        <FaGithub className="h-5 w-5"/>
      </Button>
      
    </div> 

  );
};
