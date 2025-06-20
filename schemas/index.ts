import z from "zod";

export const  LoginFormSchema = z.object({
    email :z.string().email( ),
    password:z.string(),
})

export const RegisterFormSchema = z.object({
    name:z.string().min(6),
    email:z.string().email(),
    password:z.string().min(6),
})