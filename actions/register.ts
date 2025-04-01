"use server";

import { RegisterFormSchema } from "@/schemas";
import { z } from "zod";

export const register = async (values: z.infer<typeof LoginFormSchema>) => {
  const validateFields = RegisterFormSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid fields" };
  }
  return {
    success: "Email sent",
  };
};
