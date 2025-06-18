"use server";

import { RegisterFormSchema } from "@/schemas";
import { z } from "zod";
import bcrypt from "bcrypt";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";


export const register = async (values: z.infer<typeof RegisterFormSchema>) => {
  const validateFields = RegisterFormSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid fields" };
  }
  const { name, email, password } = validateFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const exisitingUser = await getUserByEmail(email)

  if(exisitingUser ) {
    return {error:"Email already in use!"}
  }
  await db.user.create({ data:{
    name,
    email,
    password:hashedPassword
  }});

  //ToDo :send vervication token email



  return {
    success: "User created",
  };
};
