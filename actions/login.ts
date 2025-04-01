"use server"

import { LoginFormSchema } from "@/schemas"
import { z } from "zod"


export const login = async(values:z.infer<typeof LoginFormSchema>) => {
    const validateFields = LoginFormSchema.safeParse(values);

    if(!validateFields.success){
        return {error:"Invalid fields"}
    }
    return{
        success:"Email sent"
    }
}