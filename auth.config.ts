// import GitHub from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import bcrypt from "bcryptjs"
import Credentials from "next-auth/providers/Credentials"

import { LoginFormSchema } from "@/schemas"
import type { NextAuthConfig } from "next-auth"
import { getUserByEmail } from "./data/user"

export default { providers: [
    GoogleProvider({
        clientId:process.env.GOOGLE_CLIENT_ID,
        clientSecret:process.env.GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
        clientId: process.env.GITHUP_CLIENT_ID,
        clientSecret: process.env.GITHUP_CLIENT_SECRET
    }),
    Credentials({
        async authorize(credentials){
            const validatedFields = LoginFormSchema.safeParse(credentials);

            if(validatedFields.success){
                const {email , password} = validatedFields.data;
                const user = await getUserByEmail(email)
                if(!user || !user.password ) return null;

                const passwordMatch  = await bcrypt.compare(
                    password, user.password
                )
                if(passwordMatch) return user;
            }
            return null
        }
    })
] } satisfies NextAuthConfig