"use server"

import { LoginFormSchema } from "@/schemas"
import { z } from "zod"

// import bcrypt from "bcrypt"

import { signIn } from "@/auth"
import { DEFAULT_LOGIN_REDIRECT } from "@/routes"
import { AuthError } from "next-auth"

export const login = async(values:z.infer<typeof LoginFormSchema>) => {
    const validateFields = LoginFormSchema.safeParse(values);
    if(!validateFields.success){
        return {error:"invalid inputs"}
    }
    const {email, password} = validateFields.data;
  
    try{
        await signIn("credentials",{
            email, password,
            redirectTo: DEFAULT_LOGIN_REDIRECT
        })
    }catch (error){
     if(error instanceof AuthError){
        switch(error.type){
            case "CredentialsSignin": 
                return{error: "Invalid credentials!"}
            default:
                return {error : "Somthing went wrong!"}
        }
     }
     throw error
    }
 
   
}